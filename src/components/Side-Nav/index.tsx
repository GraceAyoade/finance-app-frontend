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
            <h4 style={{color:"rgba(1,61,59,255)"}}>Air Save</h4>
          </div>
          <nav className="nav-links">
            <ul className="link-lists">
              <li>
                <div className="icon-style">
                  <FiMenu />
                  Dashboard
                </div>
              </li>
              <li>
                <div className="icon-style">
                  <FiCreditCard />
                  My Waitlist
                </div>
              </li>
              <li>
                <div className="icon-style">
                  <FiRefreshCw />
                  Transactions
                </div>
              </li>
              <li>
                <div className="icon-style">
                  <FiCodesandbox />
                  My Statistics
                </div>
              </li>
              <li>
                <div className="icon-style">
                  <FiSettings />
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
