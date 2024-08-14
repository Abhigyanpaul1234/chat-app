import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Registration({ setIsRegistered, onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/local/register`, {
        username: name,
        email,
        password
      });
      console.log('Registration successful:', response.data);
      onSuccess();
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-form">
      <h2>Registration</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}

export default Registration;
