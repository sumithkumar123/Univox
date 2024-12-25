// import React from 'react';
// import '../styles/Login.css';
// import { Link } from 'react-router-dom'; // Import Link
// // for awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';

// const LoginPage = () => {
//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Welcome !!!</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="email">Email address or phone number</label>
//             <input type="text" id="email" placeholder="Enter your email or phone" required />
//             <label htmlFor='password'> Password</label>
//             <input type="password" id="email" placeholder="Enter your Password" required />
//             </div>
//           <Link to="/upload1"><button type="submit" className="btn-primary">Continue</button></Link>
//         </form>
//         <p>
//           Don't have an account? <Link to="/signup">Sign Up</Link> {/* Use Link component */}
//         </p>
        
//         {/* <div className="oauth-buttons"> */}
//   {/* <button className="oauth-btn google-btn">
//     <img src="google-icon.png" alt="Google Icon" /> 
//     Continue with Google
//   </button>
//   <button className="oauth-btn microsoft-btn">
//     <img src="microsoft-icon.png" alt="Microsoft Icon" /> 
//     Continue with Microsoft Account
//   </button>
//   <button className="oauth-btn apple-btn">
//     <img src="apple-icon.png" alt="Apple Icon" /> 
//     Continue with Apple
//   </button>
// </div>  */}
//      {/* for awesome icons */}
//      {/* <div className="oauth-buttons">
//       <button className="oauth-btn google-btn">
//         <FontAwesomeIcon icon={faGoogle} size="lg" /> Continue with Google
//       </button>
//       <button className="oauth-btn microsoft-btn">
//         <FontAwesomeIcon icon={faMicrosoft} size="lg" /> Continue with Microsoft Account
//       </button>
//       <button className="oauth-btn apple-btn">
//         <FontAwesomeIcon icon={faApple} size="lg" /> Continue with Apple
//       </button>
//     </div> */}
    
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store JWT token in localStorage or cookies for authenticated sessions
        localStorage.setItem('authToken', data.token);
        // Redirect to another page, for example, the upload page
        window.location.href = '/translate';
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome !!!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address or phone number</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or phone"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
          </div>
          <button type="submit" className="btn-primary">Continue</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

