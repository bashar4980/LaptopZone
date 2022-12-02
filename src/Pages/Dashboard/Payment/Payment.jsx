import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import Checkoutform from "./Checkoutform";

const Payment = () => {
  const paymentData = useLoaderData();
  const stripePromise = loadStripe(
    "pk_test_51MAPLYCeVqU20XYAPPa9kCXbfWo3ffmOEl8Tip8YIR53A7Swug3Lwa81dMiBQtqZhAvuYwXDN94JJKBLw2biDxIV00hFyCDK09"
  );
  return (
    <div>
      <h1 className="text-4xl font-bold text-secondary mb-5">Payment Please</h1>
      <h3 className="text-3xl ">Product: {paymentData.ProductName}</h3>
      <p className="text-xl font-semibold">Price: {paymentData.ResellPrice}</p>
      <p className="text-xl font-semibold">Email: {paymentData.buyerEmail}</p>

      <div className="w-96 my-12">
      <Elements stripe={stripePromise}>
      <Checkoutform paymentData={paymentData}/>
    </Elements>
      </div>
    </div>

  );
};

export default Payment;
