import react from "react";
import "./SideNav.css";
import { FiCheckCircle, FiCodesandbox, FiCreditCard, FiMenu, FiRefreshCcw, FiRefreshCw, FiRotateCw, FiSettings, FiTablet } from "react-icons/fi";


function SideNav() {
  return (
    <>
      <div className="sideNav">
        <div className="nav-list-box">
          <div className="nav-title">
            <h2>Air Pay</h2>
          </div>
          <div className="nav-list">
            <ul>
              <li><div className="icon-style">
                <FiMenu/>
                 Dashboard
                </div></li>
              <li><div className="icon-style">
                <FiCreditCard/>
                My Waitlist
                </div></li>
              <li><div className="icon-style">
                <FiRefreshCw/>
                Transactions
                </div></li>
              <li><div className="icon-style">
                <FiCodesandbox/>
                Statistics
                </div></li>
              <li><div className="icon-style">
                <FiSettings/>
               Settings
                </div></li>
            </ul>
          </div>
        </div>
        <div className="promo-box">
          <img src="promo-image" alt="" />
        </div>
      </div>
    </>
  );
}

export default SideNav;
