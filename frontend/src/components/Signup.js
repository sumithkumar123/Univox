// import React from 'react';
// import '../styles/Signup.css';
// import { Link } from 'react-router-dom'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
// const SignupPage = () => {
//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <h2>Create your account</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input type="text" id="username" placeholder="Enter your username" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email address</label>
//             <input type="email" id="email" placeholder="Enter your email" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="Enter your password" required />
//             <label htmlFor='password'> Confirm Password</label>
//             <input type="password" id="email" placeholder="Re-enter your Password" required />
//           </div>
//           <Link to="/login"><button type="submit" className="btn-primary">Sign Up</button></Link>
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Log in</Link> {/* Use Link component */}
//         </p>
        
//         {/* <div className="oauth-buttons">
//   <button className="oauth-btn google-btn">
//     <img src="google-icon.png" alt="Google Icon" /> 
//   </button>
//   <button className="oauth-btn microsoft-btn">
//     <img src="microsoft-icon.png" alt="Microsoft Icon" /> 
//     Continue with Microsoft Account
//   </button>
//   <button className="oauth-btn apple-btn">
//     <img src="apple-icon.png" alt="Apple Icon" /> 
//     Continue with Apple
//   </button>
// </div> */}
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
//       </div> */}
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        localStorage.setItem('authToken', data.token);
        window.location.href = '/login';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
            />
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
