import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Gallery from "../Components/Gallery/Gallery";
import Rooms from "../Components/Rooms/Rooms";
import Amenities from "../Components/Amenities/Amenities";
import About from "../Components/About/About"
import Contact from "../Components/Contact/Contact";
import Review from "../Components/Review/Review"
import RoomView from '../Components/RoomView/RoomView'

const router = createBrowserRouter([
    {
        path: "/",
        element: <div style={{
            overflow: 'hidden',
        }}>
            <App />
        </div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'gallery',
                element: <Gallery/>
            },
            {
                path: 'rooms',
                element: <Rooms/>
            },
            {
                path: 'amenities',
                element: <Amenities/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element:  <Contact/>
            },
            {
                path: 'review',
                element: <Review/>
            },
            {
                path: 'roomView/:id',
                element: <RoomView/>
            }
        ],
    },
    {
        path: "/resortHome",

    }

]);

export default router;