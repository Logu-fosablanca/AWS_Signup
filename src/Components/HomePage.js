
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  // Extract username from route parameters
 const [userData, setUserData] = useState('');

  const { username } = useParams();
  console.log(username);

  useEffect(() => {
    const fetchData = async () => {
       
          try {
            // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
            // headers.append('Access-Control-Allow-Credentials', 'true');
            const response = await fetch(`https://2e817mx5u5.execute-api.ap-south-1.amazonaws.com/test/userData?username=${username}`);
            const data = await response.json();
    
            if (response.ok) {
              setUserData(data);
            } else {
              console.error('Error fetching data:', data.error);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        
    }
      

    fetchData();
  }, []);

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
    fontWeight: 'bold', // Added to make text bold
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Welcome to the Home Page, {username}!</h2>

      <div style={headerStyle}>
        <h2 style={headerStyle}>User Data:</h2>

        <div>
          {userData ? (
            <pre style={headerStyle}>{JSON.stringify(userData, null, 2)}</pre>
          ) : (
            <p style={headerStyle}>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};





export default HomePage;
