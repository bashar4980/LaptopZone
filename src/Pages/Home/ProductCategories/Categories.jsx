import React from 'react';

const Categories = ({Product}) => {
    const {Category , CategoryImg } = Product
    // 
    return (
        <div>
              <>
          <div className="card rounded bg-primary hover:shadow-xl hover:text-secondary hover:bg-white">
            <figure className='p-5' >
              <img
                src={CategoryImg}
                alt="Shoes"
                className='w-14 h-14 rounded-full'
              />
            </figure>
            <div className="mx-auto py-2">
              <h2 className="text-xl font-semibold ">{Category}</h2>
              <button className='btn btn-outline btn-sm my-3 hover:bg-secondary'>Buy Now</button>
              
            </div>
          </div>
        </>

    
        </div>
    );
};

export default Categories;