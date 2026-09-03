import { Outlet } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="home-pg">
      <ScrollToTop />
      <Navbar />
      <div className="app-div"></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
