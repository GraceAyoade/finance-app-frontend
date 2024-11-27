import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import SignUpForm from "./pages/Signup/Signup";
import LogInPageM from "./pages/Login/LogInPage.m";
import Entries from "./pages/Dashboard/Entries/Entries"
import Landingpage from "./pages/Landingpage/Landingpage";
import AuthContext from "./contexts/AuthContext";
import MainBox from "./components/Main-Box";

const App: React.FC = () => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />}>
            <Route path="" element={<MainBox />}></Route>
            <Route path="entries" element={<Entries />}></Route>
            <Route path="budgets" element={<div>Budgets</div>}></Route>
            <Route path="reports" element={<div>Reports</div>}></Route>
            <Route path="achievements" element={<div>Achievements</div>}></Route>
          </Route>
          <Route path="/login" element={<LogInPageM />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
