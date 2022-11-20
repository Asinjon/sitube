import React from 'react';
import Home from './containers/Home';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import { RootState } from './redux/app';
import {useSelector, useDispatch} from "react-redux";

function App() {
  const {isExpanded} = useSelector((prev: RootState) => prev.menu);
  console.log("state", isExpanded);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>No way!</h2>} />
      </Routes>
    </div>
  );
}

export default App;
