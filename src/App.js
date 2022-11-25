import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router/Router';

const App = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;