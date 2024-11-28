import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [userName, setUserName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [date, setDate] = useState("");
  const [nationality, setNationality] = useState(" ");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    console.dir(e.target);
    // setIsChecked(event?.target.checked)
    try {
      await axiosInstance.post("/auth/signup", {
        firstName,
        lastName,
        userName,
        email,
        password,
        date,
        nationality,
        isChecked,
      });
      navigate("/logIn"); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signupBg">
      <div className="sign-up-form">
        <h2>Hey, Welcome!👋</h2>
        <p>Fill in the details to create an account.</p>
        <form>
          <input
            placeholder="First Name"
            type="text"
            required
            value={firstName}
            onChange={(e: any) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e: any) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            required
            value={userName}
            onChange={(e: any) => setUserName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            required
            value={date}
            onChange={(e: any) => setDate(e.target.value)}
          />
          <select
            required
            value={nationality}
            onChange={(e: any) => setNationality(e.target.value)}
          >
            <option value="" disabled selected>
              Nationality
            </option>
            <option value="nigeria">Nigeria</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="other">Other</option>
          </select>

          <label className="checkbox-container">
            <input
              type="checkbox"
              required
              checked={isChecked}
              onChange={(e: any) => setIsChecked(!isChecked)}
            />
            I agree to the
            <a href="/terms-and-conditions" target="_blank">
              {" "}
              terms and conditions
            </a>
          </label>

          <div className="btns">
            <button
              className="sign-up-button"
              onClick={handleSignup}
            >
              SignUp
            </button>
          </div>
          <Link to="/logIn">already have an account? LogIn</Link>
        </form>
      </div>{" "}
      <div className="background-panel">
        <div className="background-content">
          <h1>Digital platform for saving</h1>
          <p>
            Save and keep track of your Finance with Air Save. Easy and fun to
            use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
