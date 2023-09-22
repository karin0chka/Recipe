import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Logout from './components/auth/Logout';
import Navbar from "./components/navigation/Navbar";
import Home from './pages/Homepage';
import Login from "./pages/Login";
import Registration from './pages/Registration';


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </>
  )
}


export default App
