import React from "react";
import "./output.css";
import Homepage from "./pages/homepage";
import HeaderMobile from "./component/hedaermobail";
import PDP from "./pages/PDP";
import Success from "./pages/Success";
import Header from "./component/hedaer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      {/* <Homepage/> */}
      {/* <Header/> */}
      {/* <HeaderMobile/> */}

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/pdp" element={<PDP />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
