import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="landing">
        <header className="header">
          <div className="logo">Air Save</div>
          <nav className="nav">
            <a href="/">Features</a>
            <a href="/">About Us</a>
            <a href="/">Pricing</a>
            <a href="/">Contact Us</a>
          </nav>
          <div className="auth-buttons">
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-button">Sign Up</button>
            </Link>
          </div>
        </header>

        <main className="hero-section">
          <h1 className="hero-title">
            SMART MONEY
            <br />
            SIMPLE SOLUTIONS
          </h1>
          <p className="hero-subtitle">
            In the realm of personal banking, we prioritize convenience and
            security. Experience seamless transactions at your fingertips
            anytime.
          </p>
          <button className="get-started-button">Get Started</button>

          <div className="cards-container">
            <div className="card-placeholder"></div>
            <div className="card card-red">
              <h3>Air Save</h3>
              <p>
                Card Number
                <br />
                6522 8564 2586 4779
              </p>
              <div className="card-footer">
                <span>Card Holder Name</span>
                <strong>Robert Akwu</strong>
              </div>
            </div>
            <div className="card card-green">
              <h3>Air Save</h3>
              <p>
                Card Number
                <br />
                6522 8564 2586 4779
              </p>
              <div className="card-footer">
                <span>Card Holder Name</span>
                <strong>Ajiboye James</strong>
              </div>
            </div>
            <div className="card card-purple">
              <h3>Air Save</h3>
              <p>
                Card Number
                <br />
                6522 8564 2586 4779
              </p>
              <div className="card-footer">
                <span>Card Holder Name</span>
                <strong>Esther Freeman</strong>
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
