import React, { useState } from 'react';

function Result() {
  const [audioFile, setAudioFile] = useState(null); // State for the uploaded file
  const [loading, setLoading] = useState(false); // State for the upload process
  const [videoPath, setVideoPath] = useState(''); // State for the video URL returned from the backend

  // Handle file selection
  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!audioFile) {
      alert('Please select an audio file.');
      return;
    }

    setLoading(true); // Show loading state
    const formData = new FormData();
    formData.append('audio_file', audioFile);

    try {
      // Send the audio file to the backend
      const response = await fetch('http://127.0.0.1:8000/result', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setVideoPath(data.video_url); // Set the video URL returned from the backend
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      alert(`Unexpected error: ${error}`);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Upload Audio for Video Alignment</h1>

      {/* File input for uploading audio */}
      <input
        type="file"
        accept=".mp3,.wav"
        onChange={handleFileChange}
        style={{ margin: '10px' }}
      />

      {/* Upload button */}
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>

      {/* Display the processed video once the backend responds */}
      {videoPath && (
        <div style={{ marginTop: '20px' }}>
          <h3>Processed Video</h3>
          <video
            width="560"
            height="315"
            controls
            src={videoPath}
            style={{ border: '1px solid black', marginTop: '10px' }}
          ></video>
        </div>
      )}
    </div>
  );
}

export default Result;
