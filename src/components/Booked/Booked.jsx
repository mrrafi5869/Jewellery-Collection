import React, { useEffect, useState } from 'react';
import CategoryProduct from '../Products/CategoryProduct';

const Booked = () => {
    const [bookedProducts, setBookedProducts] = useState([]);
    useEffect(() => {
        const storedProduct = localStorage.getItem('products');
        setBookedProducts(storedProduct)
    } , [])

    return (
        <div>
            {/* {
                bookedProducts?.map(bookedProduct => <CategoryProduct key={bookedProduct.id} product={bookedProduct}></CategoryProduct>)
            } */}
        </div>
    );
};

export default Booked;