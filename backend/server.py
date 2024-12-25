from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from moviepy.editor import VideoFileClip, AudioFileClip
from googletrans import Translator
from gtts import gTTS
from pydub import AudioSegment
import os
import uuid
import shutil
import speech_recognition as sr

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Directories for input and output
UPLOAD_FOLDER = "uploads"
OUTPUT_VIDEOS_FOLDER = "output_videos"
INPUT_VIDEOS_FOLDER = "input_videos"
OUTPUT_AUDIOS_FOLDER = "output_audios"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_VIDEOS_FOLDER, exist_ok=True)
os.makedirs(INPUT_VIDEOS_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_AUDIOS_FOLDER, exist_ok=True)

# Path to predefined video
PREDEFINED_VIDEO_PATH = "./input_videos/4dcd7299ef16473c90d1af78d8f8ab43_ambani_video_inp.mp4"

# Utility to convert files to WAV
def convert_to_wav(input_file_path: str, output_file_path: str):
    audio = AudioSegment.from_file(input_file_path)
    audio.export(output_file_path, format="wav")

# Speech recognition utility
def process_audio(file_path: str, source_language: str) -> str:
    recognizer = sr.Recognizer()
    wav_file = f"temp_{uuid.uuid4().hex}.wav"
    convert_to_wav(file_path, wav_file)
    with sr.AudioFile(wav_file) as source:
        audio = recognizer.record(source)
    os.remove(wav_file)
    return recognizer.recognize_google(audio, language=source_language)

@app.post("/result")
async def upload_audio(audio_file: UploadFile = File(...)):
    if not audio_file.filename.endswith(('mp3', 'wav')):
        raise HTTPException(status_code=400, detail="Invalid audio file format. Only MP3 and WAV are supported.")
    
    audio_file_path = os.path.join(UPLOAD_FOLDER, f"{uuid.uuid4()}_{audio_file.filename}")
    with open(audio_file_path, "wb") as buffer:
        buffer.write(await audio_file.read())

    if not os.path.exists(PREDEFINED_VIDEO_PATH):
        raise HTTPException(status_code=404, detail="Predefined video not found.")

    try:
        video_clip = VideoFileClip(PREDEFINED_VIDEO_PATH)
        audio_clip = AudioFileClip(audio_file_path)

        audio_clip = audio_clip.subclip(0, min(video_clip.duration, audio_clip.duration))
        video_clip = video_clip.set_audio(audio_clip)

        output_filename = f"output_{uuid.uuid4()}.mp4"
        output_path = os.path.join(OUTPUT_VIDEOS_FOLDER, output_filename)
        video_clip.write_videofile(output_path, codec="libx264", audio_codec="aac")

        audio_clip.close()
        video_clip.close()
        os.remove(audio_file_path)

        return JSONResponse({"video_url": f"http://127.0.0.1:8000/videos/{output_filename}"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/translate")
async def upload_file(
    file: UploadFile = File(...),
    input_language: str = Form(...),
    output_language: str = Form(...),
):
    input_file_path = os.path.join(INPUT_VIDEOS_FOLDER, f"{uuid.uuid4().hex}_{file.filename}")
    try:
        with open(input_file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        if not os.path.exists(input_file_path):
            raise HTTPException(status_code=400, detail=f"Failed to save the uploaded file to {input_file_path}")
        
        text = process_audio(input_file_path, input_language)

        translator = Translator()
        translated_text = translator.translate(text, src=input_language, dest=output_language).text

        output_file_name = f"{uuid.uuid4().hex}_translated.mp3"
        output_file_path = os.path.join(OUTPUT_AUDIOS_FOLDER, output_file_name)
        
        tts = gTTS(text=translated_text, lang=output_language, slow=False)
        tts.save(output_file_path)

        return {"message": "Translation successful!", "output_file": output_file_name}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@app.get("/videos/{filename}")
async def get_video(filename: str):
    file_path = os.path.join(OUTPUT_VIDEOS_FOLDER, filename)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Video not found.")
    return FileResponse(file_path)
