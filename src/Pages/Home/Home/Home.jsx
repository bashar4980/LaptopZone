import React from 'react';
import Advertise from '../AddveriseItem/Advertise';
import Banner from '../Banner/Banner';
import ProductC from '../ProductCategories/ProductC';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <ProductC></ProductC>
        </div>
    );
};

export default Home;