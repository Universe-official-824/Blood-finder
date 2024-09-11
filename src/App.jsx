import React from "react";
import Donor from "./components/Donor";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";


const App = () => {
  return <div className="text-center bg-sky-500">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </div>;

};

export default App;
