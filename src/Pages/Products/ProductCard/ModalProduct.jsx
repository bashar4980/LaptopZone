import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { UserContext } from "../../../Context/AuthProvider";


const ModalProduct = ({product , setSelectedProduct}) => {
    // const {register,handleSubmit , reset} = useForm()
   console.log(product)
    const {user} = useContext(UserContext)
    const {ProductName, ResellPrice} = product;
    const handleSubmit =(event)=>{
      event.preventDefault()
      const form = event.target;
      const ProductImg= product.ProductImg;
      const ResellPrice = form.ResellPrice.value;
      const ProductName = form.ProductName.value;
      const buyerEmail = user?.email;
      const Location = form.Location.value;
      const BuyerName = form.BuyerName.value;
      const Phone = form.Phone.value;
      const productInfo={
        BuyerName,
        ProductName,
        ProductImg,
        ResellPrice,
        buyerEmail,
        Location,
        Phone
      }
     fetch("http://localhost:5000/products/booking",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(productInfo)
     })
     .then(res=>res.json())
     .then(data=>{
      if(data.acknowledged){
        toast.success(`${ProductName} is booked`)
        form.reset()
        setSelectedProduct(null)
      }
     })
    }
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  bg-gray-900">
          <label
            htmlFor="booking"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex items-center justify-center text-center  text-gray-100">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full  p-5 rounded  text-gray-100 ng-untouched ng-pristine ng-valid"
            >
              <label
                for="username"
                className="self-start text-xs font-semibold"
              >
              Buyer Name
              </label>
              <input
                id="username"
                type="text"
           
                name="BuyerName"
                 
                defaultValue={user?.displayName}
                disabled
                className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
              />
               
               <label
                for="eamil"
                className="self-start text-xs font-semibold"
              >
              Email
              </label>
              <input
             
                id="email"
                type="text"
                defaultValue={user?.email}
                name="buyerEmail"
                disabled
                className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
              />

<label
                for="Product Name"
                className="self-start text-xs font-semibold"
              >
              Product Name
              </label>
              <input
             
                id="Product Name"
                type="text"
                defaultValue={ProductName}
                disabled
                name="ProductName"
                className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
              />
               <label
                for="Price"
                className="self-start text-xs font-semibold"
              >
              Price
              </label>
              <input
                id="price"
                type="text"
                disabled
              name="ResellPrice"
                defaultValue={ResellPrice}
                className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
              />
             

            <label
                for="Location"
                className="self-start mt-3 text-xs font-semibold"
              >
                Meeting Location
              </label>
              <input
                id="Location"
                name="location"
                required
                type="text"
                className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
              />

                 <label
                for="Phone"
                className="self-start mt-3 text-xs font-semibold"
              >
               Phone Number
              </label>
              <input
                id="Phone"
               name="phone"
               required
                type="text"
                className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-400 focus:ring-violet-400"
              />
              
              <button
                type="submit"
                className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-400 text-gray-900"
              >
                Submit
              </button>
              <div className="flex justify-center mt-6 space-x-2 text-xs">
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
