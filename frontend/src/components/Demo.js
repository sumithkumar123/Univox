import React,{useEffect,useState} from 'react';
import '../styles/Demo.css';

function Demo() {
  const [showVideo, setShowVideo] = useState(false); // State to control video visibility

  useEffect(() => {
    // Set a timer to show the video after 3 seconds
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="translate-page">
    <header className="header">
                <h1 className="logo">Univox</h1>
                <div className="nav-buttons">
                    <button className="nav-button">Upload</button>
                    <button className="nav-button">Login</button>
                </div>
            </header>
      
      
            {showVideo ? ( // Render the video if showVideo is true
        <div className="video-demo">
          <div className="disclaimer">
            <strong>Disclaimer:</strong> This is a sample video used for demo purposes only.
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kMK01nwU8TA" // Change to embed URL
            title="YouTube demo video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div>Loading video...</div> // Optional loading message
      )}
    </div>
  );
}

export default Demo;