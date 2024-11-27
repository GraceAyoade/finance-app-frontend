import React, { useEffect, useContext } from "react";
import SideNav from "../../components/Side-Nav";
import "./Home.css";
import AuthContext from "../../contexts/AuthContext";
import { Outlet } from "react-router-dom";

const Home = ({}) => {
  const authData = useContext(AuthContext);
  console.log(authData);
  useEffect(() => {}, []);
  return (
    <>
      <section className="wrapper">
        <SideNav />
        {/* <MainBox /> */}
        <Outlet />
      </section>
    </>
  );
};

export default Home;
