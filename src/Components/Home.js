import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  
  return (
    
    <div style={containerStyle}>
      <h1 style={headerStyle}>Welcome to Our App</h1>
      <p style={descriptionStyle}>Explore our features and choose an option:</p>
      <div style={buttonContainerStyle}>
        <Link to="/login" style={buttonStyle}>Login</Link>
        <Link to="/signup" style={buttonStyle}>Sign Up</Link>
      </div>
    </div>
  );
};

const containerStyle = {
  textAlign: 'center',
  marginTop: '100px',
};

const headerStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#333',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#555',
  marginBottom: '30px',
};

const buttonContainerStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  margin: '0 10px',
  padding: '10px 20px',
  textDecoration: 'none',
  color: '#fff',
  background: '#3498db',
  borderRadius: '5px',
  fontSize: '1rem',
};

export default Home;
