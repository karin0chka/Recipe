import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import Home from './pages/Homepage';
import Login from "./pages/Login";
import Registration from './pages/Registration';
import FavoriteRec from './pages/FavoriteRec';
import Logout from './pages/Logout';


function App() {


  return (
    <>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/favorite" element={<FavoriteRec />} />
        </Routes>

    </>
  )
}


export default App
