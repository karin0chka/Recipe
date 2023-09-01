import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Homepage'
import Login from "./Login"
import Logout from './Logout'
import './App.css'

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  )
}


export default App
