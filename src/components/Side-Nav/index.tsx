import "./SideNav.css";
import {
  FiCodesandbox,
  FiCreditCard,
  FiMenu,
  FiRefreshCw,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      <section className="side-nav">
        <div className="nav-list-box">
          <div className="nav-title">
            <h4 style={{ color: "rgba(1,61,59,255)" }}>Air Save</h4>
          </div>
          <nav className="nav-links">
            <ul className="link-lists">
              <li>
                <Link to="/dashboard">
                  <div className="icon-style">
                    <FiMenu />
                    Dashboard
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/entries">
                  <div className="icon-style">
                    <FiCreditCard />
                    My Entries
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/budgets">
                  <div className="icon-style">
                    <FiRefreshCw />
                    My Budgets
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/reports">
                  <div className="icon-style">
                    <FiCodesandbox />
                    My Reports
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/achievements">
                  <div className="icon-style">
                    <FiSettings />
                    Achievements
                  </div>
                </Link>
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
