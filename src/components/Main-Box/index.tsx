import { useEffect, useState } from "react";
import BarChart from "../BarChart";
import PieChart from "../PieChart";
import "./MainBox.css";
import {
  FiCalendar,
  FiCircle,
  FiPlus,
  FiSearch,
  FiTriangle,
  FiUploadCloud,
} from "react-icons/fi";
import axios from "axios";
import { axiosPrivate } from "../../api/axios";

function MainBox() {
  const [piechartData, setPiechartData] = useState({} as any);
  const [barChartData, setBarchartData] = useState([{}] as any);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axiosPrivate.get("/reports/summary");
        setPiechartData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChartData();
  }, []);

  useEffect(()=>{
    const getchartData = async ()=>{
try {
    const response = await axiosPrivate.get("/reports/cash-flow")
    setBarchartData(response.data.data);
    console.log(response.data.data)
  } catch (error) {
  console.log(error);
}
    }
getchartData()
  }, [])



  return (
    <>
      <section className="main-box">
        <div className="nav-header flex">
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
              <FiTriangle className=" triangle" />
            </div>
            <div className="profile">
              <div className="profile-details ">
                <img
                  src="/profile-picture/profile-image.JPG"
                  alt="profile"
                  className="profile-image"
                />
                Grace Ayoade
              </div>
              <div className="round-1"></div>
              <div className="round-2"></div>
            </div>
          </div>
        </div>

        <section className="main-content-box">
          <div className="display-board">
            <div className="total-amount">
              <div className="total-details">
                <div className="details-header">
                  <div className="text">Balance Details</div>
                  <div className="text">{`$${piechartData.balance}`}</div>
                  <div className="text">$ 20, 882.9</div>
                </div>
                <div className="details-icon flex">
                  <FiCircle className="border-white circle" />
                  <FiCircle className="border-white circle" />
                </div>
              </div>
              <div className="account-details">
                <div className="text"> Account number</div>
                <div className="text"> ASKHTONDJDIJDIIS</div>
              </div>
            </div>
            <div className="statistics-chart flex flex-column">
              <div className="account-details flex justify-between items-center">
                <div className="poppins-regular">SPENDING STATISTICS</div>
                <div className="icon-style">
                  0
                  <div
                    className="bg"
                    style={{ padding: "6px", border: "none", color: "#003e3b" }}
                  >
                    1 month
                  </div>
                  <FiTriangle className=" triangle" />
                </div>
              </div>
              <div className="charts flex justify-between">
                <div className="transaction-chart-box flex justify-between items-center">
                  <div className="transactions">
                    <div className="t-icon poppins-semibold">
                      <FiCircle className="circle border-green" />
                      Transactions
                    </div>
                    <div
                      className="poppins-extrabold"
                      style={{ color: "#003e3b" }}
                    >
                      $546
                    </div>
                    <div className="poppins-light" style={{ color: "grey" }}>
                      21% of income
                    </div>
                  </div>
                  <div className="chartjs"></div>
                </div>
                <div className="transaction-chart-box flex justify-between items-center">
                  <div className="transactions">
                    <div className="t-icon poppins-semibold">
                      <FiCircle className="circle border-yellow" />
                      Entertainment
                    </div>
                    <div
                      className="poppins-extrabold"
                      style={{ color: "#003e3b" }}
                    >
                      $245
                    </div>
                    <div className="poppins-light" style={{ color: "grey" }}>
                      11% of income
                    </div>
                  </div>
                  <div className="chartjs">CHART from chartJS</div>
                </div>
                {/* <div className="dotted-line flex flex-column justify-center align-center">
                  <FiPlus className="icon" />
                  <p style={{ color: "#003e3b" }}>Add</p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="transactions-analysis flex">
            <div className="transaction-box">
              <div className="transactions-header flex items-center justify-between">
                <div className="poppins-regular" style={{ padding: "8px" }}>
                  TRANSACTIONS HISTORY
                </div>
                <div className="flex icon-style">
                  <div style={{ color: "rgba(40, 78, 56, 1)" }}>See all</div>
                  <FiTriangle className=" triangle" />
                </div>
              </div>
              <div className="transaction-list flex justify-between items-center">
                <div className="transaction-details-list icon-style">
                  <div className="transaction-icon" style={{ padding: "10px" }}>
                    <FiUploadCloud />
                  </div>
                  <div className="poppins-semibold">
                    Money transfer
                    <div className="poppins-extralight">20 hours ago</div>
                  </div>
                </div>
                <div>
                  <div className="poppins-bold">-1005</div>
                </div>
              </div>
            </div>
            <div className="expenses-chart">
              <div className="account-details flex justify-between items-center">
                <div className="poppins-regular" style={{ padding: "8px" }}>
                  EXPENSES CLASSIFICATION
                </div>
                <div className="icon-style">
                  <div
                    className="bg"
                    style={{ padding: "6px", border: "none", color: "#003e3b" }}
                  >
                    6 months
                  </div>
                  <FiTriangle className=" triangle" />
                </div>
              </div>
              <div className="flex">
                <div className="pie-chart">
                  <PieChart
                    data={{
                      income: piechartData.totalIncome,
                      expenses: piechartData.totalExpense,
                    }}
                    width="250px"
                    height="250px"
                  />
                </div>
                <div className="Bar-Chart">
                  <BarChart
                    data={[
                      { month: barChartData.month, income: barChartData.income, expenses: barChartData.expenses },
                      { month: "February", income: 6000, expenses: 4000 },
                      { month: "March", income: 7000, expenses: 3500 },
                      { month: "April", income: 6500, expenses: 4500 },
                      { month: "May", income: 7000, expenses: 5000 },
                      { month: "June", income: 8000, expenses: 4000 },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default MainBox;
