import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    navigate("/dashboard"); // Navigate to the dashboard after successful login
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <h2 style={{color: "#003d3a"}}>App Save</h2>
        {/* <img src="#" alt="App Save" className="logo" /> */}
        <h5>Hey, Hello 👋</h5>
        <p>Enter your email and password to login.</p>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="grace.ayoade@gmail.com"
        />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input type="password" id="password" placeholder="********" />
          <button type="button" className="show-password">
          </button>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="/forgot-password">Forgot password?</a>
        </div>

        <div className="btns">
        <button type="submit" className="login-button">
          Login
        </button>
        <button type="button" className="signup-button">Sign Up</button>

        </div>

        <p className="login-with-text">Or, login with</p>
        <div className="social-login">
          <button type="button" className="social-button facebook">
            Facebook
          </button>
          <button type="button" className="social-button linkedin">
            LinkedIn
          </button>
          <button type="button" className="social-button google">
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
