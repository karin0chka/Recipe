import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import Home from './pages/Homepage';
import Login from "./pages/Login";
import Registration from './pages/Registration';
import FavoriteRec from './pages/FavoriteRec';
import Logout from './pages/Logout';
import AddRecipeForm from './components/AddRecipeForm';
import "bootstrap/dist/css/bootstrap.min.css";
import MyRecipe from './components/MyRecipe';


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
        <Route path="/addrecipe" element={<AddRecipeForm />} />
        <Route path="/myrecipe" element={<MyRecipe />} />
      </Routes>

    </>
  )
}


export default App
