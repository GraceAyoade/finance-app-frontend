import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Dashboard/Home';
import SignUpForm from './pages/Signup/Signup';
import LogInPageM from './pages/Login/LogInPage.m';
import Landingpage from './pages/Landingpage/Landingpage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<LogInPageM />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </Router>
  );
};

export default App;
