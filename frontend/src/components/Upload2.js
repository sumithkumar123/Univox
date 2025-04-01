// import React, { useState } from "react";
// import "../styles/Upload.css";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState("");
//   const [sourceLang, setSourceLang] = useState("");
//   const [targetLang, setTargetLang] = useState("");
//   const [fileName, setFileName] = useState("");
//   const [clicked, setClicked] = useState(false);
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     setFileName(selectedFile ? selectedFile.name : "");
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const selectedFile = event.dataTransfer.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileName(selectedFile.name);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   const handleUpload = () => {
//     if (!file) {
//       alert('Please upload a file first.');
//       return;
//     }

//     if (!name || !sourceLang || !targetLang) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('source_language', sourceLang);
//     formData.append('target_language', targetLang);

//     setClicked(true);

//     axios.post('http://127.0.0.1:8000/dub', formData)
//     .then((response) => {
//       alert(response.data.message);  // Show success message
//       console.log(response.data.file_path);  // Log output file path
//     })
//     .catch((error) => {
//       setClicked(false);
//       console.error('Error:', error);
//       alert(error.response?.data?.detail || "Upload failed! Please try again.");
//     });
 
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleUpload();
//   };

//   return (
//     <div className="container">
//       <h1>Language Translation Upload</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//           required
//         />
//         <select
//           value={sourceLang}
//           onChange={(e) => setSourceLang(e.target.value)}
//           required
//         >
//           <option value="" disabled>Select Source Language</option>
//           <option value="en">English</option>
//           <option value="hi">Hindi</option>
//           <option value="te">Telugu</option>
//         </select>
//         <select
//           value={targetLang}
//           onChange={(e) => setTargetLang(e.target.value)}
//           required
//         >
//           <option value="" disabled>Select Target Language</option>
//           <option value="en">English</option>
//           <option value="hi">Hindi</option>
//           <option value="te">Telugu</option>
//         </select>

//         <div
//           className="upload-box"
//           onClick={() => document.getElementById('fileInput').click()}
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//         >
//           <i className="fas fa-cloud-upload-alt"></i>
//           <p>{fileName || "Drop your file here or click to upload"}</p>
//         </div>
//         <input
//           type="file"
//           id="fileInput"
//           style={{ display: "none" }}
//           onChange={handleFileChange}
//           accept="audio/*,video/*"
//         />

//         <button type="submit" disabled={clicked}>
//           {clicked ? "Uploading..." : "Translate Now"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Upload;
