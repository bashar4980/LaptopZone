import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../../layout/Dashboard/Dashboardlayout";
import Main from "../../layout/Main/Main";
import PageNotFound from "../../Pages/404Page/404";
import Allbuyers from "../../Pages/Dashboard/Admin/Allbuyers";
import AllSellers from "../../Pages/Dashboard/Admin/Allsellers";
import Myorder from "../../Pages/Dashboard/Buyer/Myorder";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct";
import Myproducts from "../../Pages/Dashboard/Seller/Myproducts";
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
        path:"*",
        element:<PageNotFound></PageNotFound>
    },
    {
        path:"/dashboard",
        element:<Private><Dashboardlayout></Dashboardlayout></Private>,
        children:[
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/dashboard/myorders",
                element:<Myorder></Myorder>
            },
            {
                path:"/dashboard/buyers",
                element:<Allbuyers></Allbuyers>
            },
            {
                path:"/dashboard/sellers",
                element:<AllSellers></AllSellers>
            },
            {
                path:"/dashboard/addproducts",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/dashboard/myproducts",
                element:<Myproducts></Myproducts>
            }

        ]
    }
])

export default router