// app.post("/create-payment-intent" , async(req,res)=>{
//   const booking = req.bpdy;
//   const price = booking.price;
//   const amount = (0.01*price)*100
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });
//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// })