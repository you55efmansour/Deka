import React from 'react';
import Home from "./componants/home/Home";
import Product from "./componants/product/Product";
import Navbar from "./componants/navbar/Navebar";
import Video from './componants/video/Video';
import Pdf from './componants/pdf/Pdf';
import { Route, Routes, useLocation} from "react-router-dom";
import MoreDetails from './componants/moreDetails/MoreDetails';

function App() {
  const location = useLocation()
  return(
    <>
    <div className="overflow-hidden">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <>
                <Navbar showIcon = {false} />
                <Home/> 
              </>
            }
            />
            <Route path="/product/:id" element={
              <>
                <Navbar direction={"/"} showIcon = {true}/>
                <Product/>
              </>
            }/>
            <Route path="/moreDetails/:id" element={
              <>
                <Navbar direction={"/product"} showIcon = {true} passId = {true}/>
                <MoreDetails/>
              </>
            }/>
            <Route path="/pdf/:id/:color/:mypdf" element={
              <>
                <Navbar direction={"/moreDetails"} showColor = {true} showIcon = {true}/>
                    <Pdf/>
              </>
            }/>
            <Route path="/video/:id/:color/:i" element={
              <>
                <Navbar direction={"/moreDetails"} showColor = {true} showIcon = {true}/>
                  <Video/>
              </>
            }/>
          </Routes>
    </div>
    </>
  )
}

export default App;