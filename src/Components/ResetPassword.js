// ResetPassword.js
import React, { useState } from 'react';
import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js';

const REACT_USER_POOL_ID=process.env.REACT_APP_USER_POOL_ID;

const REACT_CLIENT_ID =process.env.REACT_APP_CLIENT_ID;

const ResetPassword = () => {
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

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
 
    cognitoUser.forgotPassword({
      onSuccess: () => {
        setResetPasswordSuccess(true);
      },
      onFailure: (err) => {
        setError(err.message || 'Forgot password failed');
      },
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

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

    cognitoUser.confirmPassword(verificationCode, newPassword, {
      onSuccess: () => {
        setResetPasswordSuccess(true);
        setError("Password is successfully !! Try to Login now ");
      },
      onFailure: (err) => {
        setError(err.message || 'Password reset failed');
      },
    });
  };


  const onRetry = () => {

    const poolData = {
        UserPoolId: REACT_USER_POOL_ID,
        ClientId: REACT_CLIENT_ID
    };
    const userPool = new CognitoUserPool(poolData);

    // Create a Cognito User object
    const userData = {
      Username: username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);

    // Confirm the sign-up with the verification code
    cognitoUser.resendConfirmationCode ((err, result) => {
      if (err) {
        console.error('Verification error', err);
        
      } else {
        console.log('Verification successful:', result);
        setError("Verifiction is successfully !!");
     }
    });

  };

  return (

        <div style={containerStyle}>
          <h2 style={headerStyle}>Reset Password</h2>
          {!resetPasswordSuccess ? (
            <form onSubmit={handleForgotPassword} style={formStyle}>
              <label htmlFor="username" style={labelStyle}>Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>Forgot Password</button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} style={formStyle}>
              <label htmlFor="verificationCode" style={labelStyle}>Verification Code</label>
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                style={inputStyle}
              />
              <label htmlFor="newPassword" style={labelStyle}>New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                style={inputStyle}
              />

<br></br>
              <br></br>
              <br></br>

              <button onClick={onRetry} style={buttonStyle} >Resend Code</button>

              <br></br>
              <br></br>
              <button type="submit" style={buttonStyle}>Reset Password</button>
            </form>
          )}
          {error && <p style={errorStyle}>{error}</p>}

 
          
        </div>
      );


};

    
    
    // Styles
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
      
      const formStyle = {
        marginBottom: '20px',
      };
      
      const labelStyle = {
        display: 'block',
        marginBottom: '8px',
        color: '#34495e',
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
      
      const errorStyle = {
        color: 'red',
        marginTop: '10px',
      };

    export default ResetPassword;