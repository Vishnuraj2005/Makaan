import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Master from "./pages/Master";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Property from "./pages/Property";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function App(){

  return(
    <BrowserRouter basename="/Makaan_Realestate">
    <Routes>
      <Route element={<Master/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="property" element={<Property/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)
