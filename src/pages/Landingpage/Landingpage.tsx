import React from 'react';
import './landingpage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
        <div className="landing">
        <header className="header">
        <div className="logo">PI BANK</div>
        <nav className="nav">
          <a href="/">Features</a>
          <a href="/">About Us</a>
          <a href="/">Pricing</a>
          <a href="/">Contact Us</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </header>

      <main className="hero-section">
        <h1 className="hero-title">SMART MONEY<br />SIMPLE SOLUTIONS</h1>
        <p className="hero-subtitle">
          In the realm of personal banking, we prioritize convenience and security.
          Experience seamless transactions at your fingertips anytime.
        </p>
        <button className="get-started-button">Get Started</button>

        <div className="cards-container">
          <div className="card-placeholder"></div>
          <div className="card card-red">
            <h3>PI Bank</h3>
            <p>Card Number<br />6522 8564 2586 4779</p>
            <div className="card-footer">
              <span>Card Holder Name</span>
              <strong>Robert Fox</strong>
            </div>
          </div>
          <div className="card card-green">
            <h3>PI Bank</h3>
            <p>Card Number<br />6522 8564 2586 4779</p>
            <div className="card-footer">
              <span>Card Holder Name</span>
              <strong>Jacob Jones</strong>
            </div>
          </div>
          <div className="card card-purple">
            <h3>PI Bank</h3>
            <p>Card Number<br />6522 8564 2586 4779</p>
            <div className="card-footer">
              <span>Card Holder Name</span>
              <strong>Esther Howard</strong>
            </div>
          </div>
          <div className="card-placeholder"></div>
        </div>
      </main>
        </div>
    </div>
  );
};

export default LandingPage;
