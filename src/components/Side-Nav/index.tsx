import react from "react";
import "./SideNav.css";
import {
  FiCodesandbox,
  FiCreditCard,
  FiMenu,
  FiRefreshCw,
  FiSettings,
} from "react-icons/fi";

function SideNav() {
  return (
    <>
      <section className="side-nav">
        <div className="nav-list-box">
          <div className="nav-title">
            <h2>Air Pay</h2>
          </div>
          <nav className="nav-links">
            <ul className="link-lists">
              <li>
                <div className="icon-style">
                  <FiMenu className="outlined-icon" />
                  Dashboard
                </div>
              </li>
              <li>
                <div className="icon-style">
                  <FiCreditCard className="outlined-icon" />
                  My Waitlist
                </div>
              </li>
              <li>
                <div className="icon-style">
                  <FiRefreshCw className="outlined-icon" />
                  Transactions
                </div>
              </li>
              <li>
                <div className="icon-style">
                  <FiCodesandbox className="outlined-icon" />
                  My Statistics
                </div>
              </li>
              <li>
                <div className="icon-style">
                  <FiSettings className="outlined-icon" />
                  My Settings
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="promo-box">
          <img src="promo-image" alt="" />
        </div>
      </section>
    </>
  );
}

export default SideNav;
