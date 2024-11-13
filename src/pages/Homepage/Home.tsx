import React, { useEffect, useState, useContext } from "react";
import MainBox from "../../components/Main-Box";
import SideNav from "../../components/Side-Nav";
import "./Home.css";

const Home = ({}) => {
  useEffect(() => {}, []);
  return (
    <>
      <section className="container">
        <MainBox />
        <SideNav />
      </section>
    </>
  );
};

export default Home;
