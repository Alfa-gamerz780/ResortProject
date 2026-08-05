import './App.css'
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollToTop from "../../Frontend/src/Components/ScrollToTop";
import Navbar from './Components/Navbar/Navbar';



function App() {
 

  return (
    <>
     <ScrollToTop/>
     <Navbar/>
     <Outlet/>
    </>
  )
}

export default App
