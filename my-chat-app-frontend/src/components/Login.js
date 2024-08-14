import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; 

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/local`, {
        identifier: email,
        password
      });
      localStorage.setItem('jwt', response.data.jwt);
      onLoginSuccess(response.data.jwt);
    } catch (error) {
     
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Confirm a password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login Now</button>
      </form>
    </div>
  );
}

export default Login;
