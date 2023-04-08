import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';
import image from '../../assets/image/category-banner1.jpg'
const Products = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='w-1/2 mx-auto p-2'>
            <img src={image} className='mx-auto my-5' alt="" />
            <div className='grid grid-cols-3 place-items-center gap-y-10'>
            {products &&
                products.map(product => <CategoryProduct 
                    key={product.id}
                    product={product}
                ></CategoryProduct>)
            }
        </div>
        </div>
        
    );
};

export default Products;