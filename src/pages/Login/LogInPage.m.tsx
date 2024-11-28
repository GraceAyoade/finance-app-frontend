import React from 'react';
import "./LogInPage.css"
import BackgroundPanel from './Background';
import LoginPage from './Login';

const LogInPageM: React.FC = () => {
  return (
    <div className="app-container">
      <BackgroundPanel />
      <LoginPage />
    </div>
  );
};

export default LogInPageM;
