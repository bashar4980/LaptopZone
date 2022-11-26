import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../../layout/Dashboard/Dashboardlayout";
import Main from "../../layout/Main/Main";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
// import ProductC from "../../Pages/Home/ProductCategories/ProductC";
import Products from "../../Pages/Products/Products/Products";
import Signup from "../../Pages/Signup/Signup";
import Private from "./Private";

const router = createBrowserRouter([
    {
       path:"/" ,
       element:<Main></Main>,
       children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/products/:id",
            loader: async({params})=>fetch(`http://localhost:5000/products/${params.id}`),
            element:<Products></Products>
        },
        {
            path:"/login",
            element:<Login></Login>

        },
        {
            path:"/signup",
            element:<Signup></Signup>
        }
       ]
    },
    {
        path:"/dashboard",
        element:<Private><Dashboardlayout></Dashboardlayout></Private>,
        children:[
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    }
])

export default router