import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar  from "./pages/Navbar";
import Sidebar from "./components/Sidebar";
//import { CartContextProps } from "./context/CartContext";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Sidebar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/store" element={<Store />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  ) 
}

export default App;
