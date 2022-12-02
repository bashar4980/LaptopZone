import React from 'react';
import {FaServicestack ,  FaMoneyBillAlt , FaPercent  , FaCartPlus,  FaClock} from "react-icons/fa"
 import "./Feature.css"
const Feature = () => {
    return (
        <div id="Feature" className='py-20'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100">
	<h2 className="mb-8 text-4xl font-bold leading-none text-center">What do we have to offer?</h2>
	<ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
		<li className="flex items-center space-x-2">
			<FaServicestack className='text-secondary'></FaServicestack>
			<span>Best Service your Product</span>
		</li>
		<li className="flex items-center space-x-2">
			<FaPercent className='text-secondary'></FaPercent>
			<span>100 % Authentic Product</span>
		</li>
		<li className="flex items-center space-x-2">
			<FaClock className='text-secondary'></FaClock>
			<span>24/7 Support time </span>
		</li>
		<li className="flex items-center space-x-2">
			<FaMoneyBillAlt className='text-secondary'></FaMoneyBillAlt>
			<span>7days Return Product</span>
		</li>
		<li className="flex items-center space-x-2">
			<FaPercent className='text-secondary'></FaPercent>
			<span>2 Years Warnentity</span>
		</li>
		<li className="flex items-center space-x-2">
			<FaCartPlus className='text-secondary'></FaCartPlus>
			<span>Online Order & COD system</span>
		</li>
	</ul>
</div>
        </div>
    );
};

export default Feature;