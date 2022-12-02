import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../../layout/Dashboard/Dashboardlayout";
import Main from "../../layout/Main/Main";
import PageNotFound from "../../Pages/404Page/404";
import Blog from "../../Pages/Blog/Blog";
import BlogDetails from "../../Pages/Blog/BlogDetails";
import Allbuyers from "../../Pages/Dashboard/Admin/Allbuyers";
import AllSellers from "../../Pages/Dashboard/Admin/Allsellers";
import Myorder from "../../Pages/Dashboard/Buyer/Myorder";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct";
import Myproducts from "../../Pages/Dashboard/Seller/Myproducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
// import ProductC from "../../Pages/Home/ProductCategories/ProductC";
import Products from "../../Pages/Products/Products/Products";
import Signup from "../../Pages/Signup/Signup";
import AdminPrivate from "../DashboardPrivate/AdminPriivate";
import BuyerPrivate from "../DashboardPrivate/BuyerPrivate";
import SellerPrivate from "../DashboardPrivate/SellerPrivate";
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
            element:<Private><Products></Products></Private>
        },
        {
            path:"/login",
            element:<Login></Login>

        },
        {
            path:"/signup",
            element:<Signup></Signup>
        },
        {
            path:"/blogs",
            element:<Blog></Blog>

        },
        {
            path:"/blogs/:id",
            loader: async ({params})=> fetch(`http://localhost:5000/blog/${params.id}`),
            element:<BlogDetails></BlogDetails>

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
                element:<Private><Dashboard></Dashboard></Private>
            },
            {
                path:"/dashboard/myorders",
                element:<BuyerPrivate><Myorder></Myorder></BuyerPrivate>
            },
            {
                path:"/dashboard/buyers",
                element:<AdminPrivate><Allbuyers></Allbuyers></AdminPrivate>
            },
            {
                path:"/dashboard/sellers",
                element:<AdminPrivate><AllSellers></AllSellers></AdminPrivate>
            },
            {
                path:"/dashboard/addproducts",
                element:<SellerPrivate><AddProduct></AddProduct></SellerPrivate>
            },
            {
                path:"/dashboard/myproducts",
                element:<SellerPrivate><Myproducts></Myproducts></SellerPrivate>
            },
            {
                path:"/dashboard/payment/:id",
                element:<BuyerPrivate><Payment></Payment></BuyerPrivate>,
                loader: async({params})=> fetch(`http://localhost:5000/booking/${params.id}`)
            }

        ]
    }
])

export default router