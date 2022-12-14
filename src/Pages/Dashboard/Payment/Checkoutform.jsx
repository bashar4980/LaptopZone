import React from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const Checkoutform = () => {
   
    const stripe = useStripe();
    const elements = useElements();
    const [error , setError] = useState('')




    
    const handleSubmit =async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
          const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
           setError(error.message)
          } else {
            setError('')
          }
      
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe}>
        Pay
      </button>
      
    </form>
    <p className='text-error'>{error}</p>
        </div>
    );
};

export default Checkoutform;