import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import Booked from "../components/Booked/Booked";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/booked',
                element: <Booked></Booked>
            },
            {
                path: '/about',
               element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    }
]);
export default router;