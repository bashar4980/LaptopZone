import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Authcontext from './Context/AuthProvider';
// import AuthProvider from './Context/AuthProvider';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <QueryClientProvider client={queryClient}>
    <Authcontext>
    <App></App>
    <Toaster></Toaster>
    </Authcontext>
  
 
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// echo "# b612-used-products-resale-clients-side-bashar4980" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/programming-hero-web-course-4/b612-used-products-resale-clients-side-bashar4980.git
// git push -u origin main
