import React from 'react';
import './LoginForm.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if needed
    navigate('/quiz'); // Redirect to Quiz page after login
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}> {/* Use onSubmit for form submission */}
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required />
          <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div className="remember-forget">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button> {/* Submit button */}
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
