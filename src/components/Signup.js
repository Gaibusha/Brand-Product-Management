import React, { useState } from 'react';
import { signInWithGoogle } from '../firebase';
import './Signup.css';

const Signup = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <button
          onClick={signInWithGoogle}
          className="google-button"
        >
          <i className="fab fa-google"> </i> Sign up with Google
        </button>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="signup-input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="signup-input"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="signup-input"
            required
          />
          <button
            type="submit"
            className="signup-button"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
