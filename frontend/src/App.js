import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Translate from './components/Translate';
import Upload2 from './components/Upload2';
import Demo from './components/Demo.js'
import Result from './components/Result.js'
import LoginPage from './components/Login';
import SignupPage from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/upload2" element={<Upload2 />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
