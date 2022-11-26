import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
// import ProductC from "../../Pages/Home/ProductCategories/ProductC";
import Products from "../../Pages/Products/Products/Products";
import Signup from "../../Pages/Signup/Signup";

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
    }
])

export default router