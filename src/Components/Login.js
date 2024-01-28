// Login.js
import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';
import {BrowserRouter as Router, Route, Link ,useNavigate  } from 'react-router-dom';
// import ResetPassword from './ResetPassword';

const REACT_USER_POOL_ID="ap-south-1_SIT8pgBRR";

const REACT_CLIENT_ID = "51cncugq4tkbpjklfrueovt0td";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);
    const history = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();

    const authenticationData = {
      Username: username,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const poolData = {
        UserPoolId: REACT_USER_POOL_ID,
        ClientId: REACT_CLIENT_ID
    };

    const userPool = new CognitoUserPool(poolData);

    const userData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        console.log('Successfully logged in!', session);
        setError('Successfully logged in!', session);
        history(`/home/${username}`);
        // Redirect or perform any action upon successful login
      },
      onFailure: (err) => {
        console.error('Login error', err);
        setError('Invalid username or password');
      },
    });
  };


  return (
 
    <div style={containerStyle} >
      <h2 style={headerStyle}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={formGroupStyle}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <button type="submit" style={buttonStyle}>Login</button>
        </div>
      </form>
        {/* Reset Password Link */}
        <div style={resetPasswordLinkStyle}>
        <Link to="/ResetPassword" >
            Forgot your password ? Reset it here
        </Link>
        
      </div>

    </div>
 

    
  );
};

const resetPasswordLinkStyle = {
    marginTop: '20px',
  };

const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  padding: '20px',
  maxWidth: '400px',
  margin: 'auto',
  border: '2px solid #e74c3c',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#f9e79f',
};

const headerStyle = {
  marginBottom: '20px',
  color: '#2c3e50',
};

const formGroupStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ecf0f1',
  width: '100%',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '10px',
  background: '#3498db',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default Login;
