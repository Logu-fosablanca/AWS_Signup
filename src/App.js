import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ResetPassword from './Components/ResetPassword';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/home/:username" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/ResetPassword" element={<ResetPassword/>}/>
          
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
