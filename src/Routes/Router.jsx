import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Products from "../components/Products/Products";
import Booking from "../components/Booking/Booking";

const routes = createBrowserRouter([
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
                element: <Booking></Booking>
            },
            {
                path: '/about',
               element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({params}) => fetch(`https://jewellery-collections-server.vercel.app/products/${params.id}`)
            },
        ]
    }
]);
export default routes;