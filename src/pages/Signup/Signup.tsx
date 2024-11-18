import React from "react";
import "./signup.css";

const SignUpForm: React.FC = () => {
  return (
    <div className="signupBg">
      <div className="sign-up-form">
      <h2>Hey, Welcome!👋</h2>
      <p>Fill in the details to create an account.</p>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <input type="date" placeholder="Date of Birth" required />
        <select required>
          <option value="" disabled selected>
            Nationality
          </option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="other">Other</option>
        </select>

        <label className="checkbox-container">
          <input type="checkbox" required />I agree to the{" "}
          <a href="/terms-and-conditions" target="_blank">
            terms and conditions
          </a>
        </label>

        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>

      </div>      <div className="background-panel">
      <div className="background-content">
  <h1>Digital platform for saving</h1>
  <p>Save and keep track of your Finance with Air Save. Easy and fun to use.</p>
</div>
</div>
    </div>



  );
};

export default SignUpForm;
