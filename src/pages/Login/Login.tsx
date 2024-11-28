import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axiosInstance from "../../api/axios";
import AuthContext from "../../contexts/AuthContext";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const authData = useContext(AuthContext);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.dir(e.target);
    try {
      const response = await axiosInstance.post("/auth/logIn", {
        email,
        password,
      });
      authData?.setAuth(response.data.data);
      navigate("/dashboard"); // Navigate to the dashboard after successful login
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <h2 style={{ color: "#003d3a" }}>Air Save</h2>
        {/* <img src="#" alt="App Save" className="logo" /> */}
        <h5>Hey, Hello 👋</h5>
        <p>Enter your email and password to login.</p>
      </div>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <div className="password-container">
          <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <button type="button" className="show-password"></button>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me 
          </label>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        
        <div className="btns">
          <button onClick={handleLogin} type="submit" className="login-button">
            Login
          </button>
        </div>

        <p className="login-with-text">Dont't have an account?</p>
        <Link to="/signup">
            <button type="button" className="signup-button">
              SignUp
            </button>
          </Link>
      </form>
    </div>
  );
};

export default LoginPage;
