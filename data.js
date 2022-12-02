/*
 const bookingHandeler =(product)=>{
    const ProductName=product.ProductName;
    const ProductImg= product.ProductImg;
    const ResellPrice = product.ResellPrice;
    const buyerEmail = user?.email
    const productInfo={
      ProductName,
      ProductImg,
      ResellPrice,
      buyerEmail
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
    }
   })
  
  }


*/ 