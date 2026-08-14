import './App.css'
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScrollToTop from "../../Frontend/src/Components/ScrollToTop";
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
    <div>
      <ToastContainer/>
      <ScrollToTop />
      <Navbar />
      <div className='app-body'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
