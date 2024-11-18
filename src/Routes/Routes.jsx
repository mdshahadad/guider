import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
// import Services from "../Home/Services/Services";
import Offers from "../Pages/Offers/Offers";
import AllServices from "../Pages/AllServices/AllServices";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";

const router = new createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/offers',
                element: <Offers></Offers>
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>
            }
        ]
    }
])

export default router;