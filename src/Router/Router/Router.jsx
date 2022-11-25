import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
// import ProductC from "../../Pages/Home/ProductCategories/ProductC";
import Products from "../../Pages/Products/Products/Products";

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
        }
       ]
    }
])

export default router