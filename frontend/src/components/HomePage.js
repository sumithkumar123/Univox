// import React from 'react';
// import '../styles/App.css';
// import { useNavigate } from 'react-router-dom';

// function HomePage() {
//     const navigate = useNavigate();
//     return (
//         <div className="app">
//             <header className="header">
//                 <h1 className="logo">Univox</h1>
//                 <div className="nav-buttons">
//                     <button className="nav-button">Upload</button>
//                     <button className="nav-button">Login</button>
//                 </div>
//             </header>

//             <main className="main-content">
//                 <h2 className="main-title">Transform Your Videos with AI-Powered Translation</h2>
//                 <p className="description">
//                     Upload your video, choose your languages, and watch as we translate in real-time.
//                 </p>
//                 <button className="start-button" onClick={() => navigate('/translate')}>Start Translating Now</button>

//                 <section className="how-it-works">
//                     <h3>How It Works</h3>
//                     <div className="steps">
//                         <div className="step">
//                             <div className="icon"></div>
//                             <h4>1. Upload Your Video</h4>
//                             <p>Drag and drop or select your video file to upload.</p>
//                         </div>
//                         <div className="step">
//                             <div className="icon"></div>
//                             <h4>2. Choose Languages</h4>
//                             <p>Select the original and target languages for translation.</p>
//                         </div>
//                         <div className="step">
//                             <div className="icon"></div>
//                             <h4>3. Watch the Magic</h4>
//                             <p>Our AI translates your video in real-time.</p>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="demo-section">
//                     <h3>Demo</h3>
//                     <p>Watch our demo to see how it works!</p>
//                     <div className="video-container" style={{ display: 'flex', alignItems: 'center' }}>
//   <iframe
//     width="560"
//     height="315"
//     src="https://www.youtube.com/embed/MRivVG0-GCg?si="
// // Change to embed URL
//     title="YouTube demo video"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
//   ></iframe>
//   <button className="arrow-button" onClick={() => navigate('/demo')} style={{ marginLeft: '10px' }}>→</button>
// </div>

//                 </section>

//                 <section className="why-choose-us">
//                     <h3>Why Choose Us?</h3>
//                     <div className="benefits">
//                         <div className="benefit-card">Advanced AI Technology</div>
//                         <div className="benefit-card">Multiple Languages</div>
//                         <div className="benefit-card">Fast Processing</div>
//                         <div className="benefit-card">Customizable Output</div>
//                         <div className="benefit-card">Secure and Private</div>
//                         <div className="benefit-card">24/7 Support</div>
//                     </div>
//                 </section>
//             </main>

//             <footer className="footer">
//                 <div className="footer-content">
//                     <div className="footer-section">
//                         <h4>LipSync Translator</h4>
//                         <p>Revolutionizing video translation with AI-powered lip-syncing.</p>
//                     </div>
//                     <div className="footer-section">
//                         <h4>Quick Links</h4>
//                         <p>Home | Upload Video | Pricing | Support</p>
//                     </div>
//                     <div className="footer-section">
//                         <h4>Legal</h4>
//                         <p>Terms of Service | Privacy Policy | GDPR Compliance</p>
//                     </div>
//                     <div className="footer-section">
//                         <h4>Connect With Us</h4>
//                         <p>Social Media Links</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default HomePage;

import React from 'react';
import '../styles/App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './Login';

function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="app">
            <header className="header">
                <h1 className="logo">Univox</h1>
                <div className="nav-buttons">
                    <button className="nav-button">Upload</button>
                    <Link  to='/login'><button className="nav-button">Login</button></Link>
                </div>
            </header>

            <main className="main-content">
                <h2 className="main-title">Transform Your Videos with AI-Powered Translation</h2>
                <p className="description">
                    Upload your video, choose your languages, and watch as we translate in real-time.
                </p>
                <button className="start-button" onClick={() => navigate('/translate')}>Start Translating Now</button>

                <section className="how-it-works">
                    <h3>How It Works</h3>
                    <div className="steps">
                        <div className="step">
                            <div className="icon"></div>
                            <h4>1. Upload Your Video</h4>
                            <p>Drag and drop or select your video file to upload.</p>
                        </div>
                        <div className="step">
                            <div className="icon"></div>
                            <h4>2. Choose Languages</h4>
                            <p>Select the original and target languages for translation.</p>
                        </div>
                        <div className="step">
                            <div className="icon"></div>
                            <h4>3. Watch the Magic</h4>
                            <p>Our AI translates your video in real-time.</p>
                        </div>
                    </div>
                </section>

                <section className="demo-section">
                    <h3>Demo</h3>
                    <p>Watch our demo to see how it works!</p>
                    <div className="video-container" style={{ display: 'flex', alignItems: 'center' }}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/MRivVG0-GCg?si=" // Change to embed URL
    title="YouTube demo video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <button className="arrow-button" onClick={() => navigate('/Demo')} style={{ marginLeft: '10px' }}>→</button>
</div>

                </section>

                <section className="why-choose-us">
                    <h3>Why Choose Us?</h3>
                    <div className="benefits">
                        <div className="benefit-card">Advanced AI Technology</div>
                        <div className="benefit-card">Multiple Languages</div>
                        <div className="benefit-card">Fast Processing</div>
                        <div className="benefit-card">Customizable Output</div>
                        <div className="benefit-card">Secure and Private</div>
                        <div className="benefit-card">24/7 Support</div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>LipSync Translator</h4>
                        <p>Revolutionizing video translation with AI-powered lip-syncing.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <p>Home | Upload Video | Pricing | Support</p>
                    </div>
                    <div className="footer-section">
                        <h4>Legal</h4>
                        <p>Terms of Service | Privacy Policy | GDPR Compliance</p>
                    </div>
                    <div className="footer-section">
                        <h4>Connect With Us</h4>
                        <p>Social Media Links</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;

