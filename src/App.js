import React from "react";
import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import RowPost from "./components/rowPost/RowPost";
import { originals,action, horror,trending,comedy,romance} from "./urls";

function App() {
  return (
    <div className="App">
         <Navbar />
         <Banner />
         <RowPost url={originals} title='Netflix Orginals' />
         <RowPost url={action} title='Action' isSmall />
         <RowPost url={trending} title='Trending' isSmall />\
         <RowPost url={horror} title='Horror' isSmall />
         <RowPost url={comedy} title='Comedy' isSmall />
         <RowPost url={romance} title='Romance' isSmall />
    </div>
  );
}

export default App;
