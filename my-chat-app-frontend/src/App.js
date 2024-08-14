import React, { useState } from 'react';
import './App.css';  
import Login from './components/Login';
import Chat from './components/Chat';
import Registration from './components/Registration';

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt') || '');
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="app-container">
      {!jwt && (
        <div className="auth-container">
          {!isRegistered ? (
            <div className="auth-form-wrapper">
              <Registration
                setIsRegistered={setIsRegistered}
                onSuccess={() => {
                  setIsRegistered(true);
                  alert('Registration successful! Please login to continue.');
                }}
              />
              <p>
                Already registered?{' '}
                <a onClick={() => setIsRegistered(true)}><strong>Login</strong></a>
              </p>
            </div>
          ) : (
            <div className="auth-form-wrapper">
              <Login onLoginSuccess={(token) => setJwt(token)} />
              <p>
                Don’t have an account?{' '}
                <a onClick={() => setIsRegistered(false)}><strong>Signup now</strong></a>
              </p>
            </div>
          )}
        </div>
      )}
      {jwt && <Chat />}
    </div>
  );
}

export default App;
