import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Children } from "react";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Profile from '../Components/Profile/Profile'
import Review from "../Components/Review/Review";
import RoomSet from '../Components/RoomSet/RoomSet'


const route = createBrowserRouter([
    {
        path: '/',
        element: <div style={{
            overflow: 'hidden'
        }}>
            <App />
        </div>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'review',
                element: <Review />
            },
            {
                path: 'roomset',
                element: <RoomSet />
            },
        ],
    },

    {
        path: 'login',
        element: <div style={{
            overflow:'hidden'
        }}>
            <Login />
        </div>
    },

]);

export default route