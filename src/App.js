import React from "react";
import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import RowPost from "./components/rowPost/RowPost";

function App() {
  return (
    <div className="App">
         <Navbar />
         <Banner />
         <RowPost />
         <RowPost />
    </div>
  );
}

export default App;
