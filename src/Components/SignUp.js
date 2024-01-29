import React, { useState } from 'react';
import { CognitoUserPool, CognitoUser,CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { Link } from 'react-router-dom';

const REACT_USER_POOL_ID=process.env.REACT_USER_POOL_ID;

const REACT_CLIENT_ID =process.env.REACT_CLIENT_ID;

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [signupMessage, setSignupMessage] = useState(null);
  const [nickname, setNickname] = useState('');


  const onSubmit = async (event) => {
    event.preventDefault();

    // Create a Cognito User Pool object
    const poolData = {
        UserPoolId: REACT_USER_POOL_ID,
        ClientId: REACT_CLIENT_ID
    };
    const userPool = new CognitoUserPool(poolData);

    // Create user attributes
    const attributeList = [
     
      {
        Name: 'email',
        Value: email
      },
  
      {
        Name: 'nickname',
        Value: nickname,
      }
     
    ];

    // Sign up the user
    userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
          console.error('Sign-up error', err);
          // Handle sign-up error, display an error message
          setSignupMessage(`Sign-up failed: ${err.message}`);
        } else {
          const cognitoUser = result.user;
          console.log('User signed up:', cognitoUser);
          setSignupMessage('Sign-up successful! . Please use the Login');
          

        }
      });
  };



    
  return (
    <div className="container text-center mt-5" style={containerStyle}>
      <h2 style={headerStyle}>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="email">Email</label> <t></t>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="username">Username</label> <t></t>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div className="form-group" style={formGroupStyle}>
  <label htmlFor="nickname">Nickname</label>
  <input
    type="text"
    className="form-control"
    id="nickname"
    value={nickname}
    onChange={(event) => setNickname(event.target.value)}
    required
    style={inputStyle}
  />
</div>

        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="password">Password</label> <t></t>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            style={inputStyle}
          />
        </div>

       

        <button type="submit" className="btn btn-primary" style={buttonStyle}>
          Sign Up
        </button>
      </form>

       {/* Verification form */}
      {signupMessage && (
        <div>
          <p>{signupMessage}</p>     
        </div>
      )}
 


 <a href="/login">Already have account? Login</a>

    </div>
  );
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
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '10px',
  background: '#3498db',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const popupStyle = {
  borderRadius: '8px',
  backgroundColor: '#1abc9c',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '8px',
  right: '8px',
  color: '#fff',
};

export default SignUpForm;