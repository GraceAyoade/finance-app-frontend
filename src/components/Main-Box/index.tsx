import react from "react";
import "./MainBox.css";
import {
  FiArrowDown,
  FiCalendar,
  FiEdit3,
  FiPlus,
  FiSearch,
  FiUploadCloud,
} from "react-icons/fi";

function MainBox() {
  return (
    <>
      <section className="main-box">
        <div className="nav-header">
          <div className="input">
            <FiSearch className="search-icon" />
            <input
              type="search-input"
              placeholder="Search"
              className="search-input"
            />
          </div>
          <div className="nav-header-list">
            <div className="date icon-style">
              11-04-24
              <FiCalendar />
            </div>
            <div className="lang icon-style">
                 EN
              <FiArrowDown />
            </div>
            <div className="profile icon-style">
              <div className="profile">
                <img src="/profile-picture/profile-image" alt="profile" className="profile-image"/>
                Sarah Miller
              </div>
              <FiEdit3 />
            </div>
          </div>
        </div>

        <section className="main-content-box">
          <div className="display-board">
            {/* <div className="total-amount">
              <div className="total-details">
                <div className="details-header">
                  <p>Balance Details</p>
                  <p>$ 25,657.00</p>
                  <p>$ 20, 882.9</p>
                </div>
                <div className="details-icon">
                  <FiEdit3 />
                </div>
              </div>
              <div className="account-details">
                <p>Account number</p>
                <p>ASKHTONDJDIJDIIS</p>
              </div>
            </div>
            <div className="statistics-chart">
              <div className="statistics-header">
                <p>SPENDING STATISTICS</p>
                <div>
                  <p>1 month</p>
                  <FiArrowDown />
                </div>
              </div>
              <div className="transaction-chart-box">
                <div>
                  <p>Transactions</p>
                  <p>$546</p>
                  <p>21% of income</p>
                </div>
                <div>CHART from chartJS</div>
              </div>
              <div className="entertainment-chart-box">
                <div>
                  <p>Entertainment</p>
                  <p>$245</p>
                  <p>11% of income</p>
                </div>
                <div>CHART from chartJS</div>
              </div>
              <div className="dotted-line">
                <FiPlus />
                <p>Add</p>
              </div>
            </div> */}
          </div>
          <div className="transactions-analysis">
            {/* <div className="transaction-box">
              <div className="transactions-header">
                <p>TRANSACTIONS HISTORY</p>
                <div>
                  <p>See all</p>
                  <FiArrowDown />
                </div>
              </div>
              <div className="transaction-list">
                <div>
                  <FiUploadCloud />
                </div>
                <div className="transaction-details-list">
                  <p>Money Transfer</p>
                  <p>20 hours ago</p>
                </div>
                <div>
                  <p>-1005</p>
                </div>
              </div>
            </div>
            <div className="expenses-chart">
              <div className="transactions-header">
                <p>EXPENSES CLASSIFICATION</p>
                <div>
                  <p>6 months</p>
                  <FiArrowDown />
                </div>
              </div>
              <div className="Bar-Chart">Insert Bar-Chart from ChartJs</div>
            </div> */}
          </div>
        </section>
      </section>
    </>
  );
}

export default MainBox;
