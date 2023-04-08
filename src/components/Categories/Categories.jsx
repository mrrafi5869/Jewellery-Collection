import React, { useEffect, useState } from "react";
import {  IoIosArrowRoundForward  } from 'react-icons/io';
import {  BsPlus  } from 'react-icons/bs';
import about from '../../assets/image/about-us.jpg'
import LeftBanner from '../../assets/image/left-banner.jpg'
import Products from "../Products/Products";
import CategoryProduct from "../Products/CategoryProduct";
const Categories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => {
            const limitedData = data.slice(0, 9);
            setProducts(limitedData);
        })
    } , [products]);
  return (
    <section className="w-3/5 mx-auto flex justify-around">
      <div>
        <h4 className="text-xl">Categories</h4>
        <div className="bg-white w-56 shadow-md shadow-gray-300 border border-gray-300 rounded-md mt-2 mr-8 p-2">
            <div className="flex items-center text-gray-400 border-b border-dotted border-yellow-300 my-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Rings</span>
                <BsPlus className="absolute right-0"></BsPlus>
            </div>
            <div className="flex items-center text-gray-400 border-b border-dotted border-yellow-300 my-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Earings</span>
                <BsPlus className="absolute right-0"></BsPlus>
            </div>
            <div className="flex items-center text-gray-400 border-b border-dotted border-yellow-300 my-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Necklace</span>
                <BsPlus className="absolute right-0"></BsPlus>
            </div>
            <div className="flex items-center text-gray-400 mt-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Bracelets</span>
                <BsPlus className="absolute right-0"></BsPlus>
            </div>
        </div>
        <h4 className="text-xl mt-10">Brands</h4>
        <div className="bg-white w-56 shadow-md shadow-gray-300 border border-gray-300 rounded-md mt-2 mr-8 p-2">
            <div className="flex items-center text-gray-400 border-b border-dotted border-yellow-300 my-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Chanel</span>
                <BsPlus className="absolute right-0"></BsPlus>
            </div>
            <div className="flex items-center text-gray-400 border-b border-dotted border-yellow-300 my-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Coco Lee</span>
                <BsPlus className="absolute right-0"></BsPlus>
            </div>
            <div className="flex items-center text-gray-400 border-b border-dotted border-yellow-300 my-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Collette</span>
            </div>
            <div className="flex items-center text-gray-400 border-b border-dotted border-yellow-300 my-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Mango</span>
            </div>
            <div className="flex items-center text-gray-400 border-b border-dotted border-yellow-300 my-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Saas & Bide</span>
            </div>
            <div className="flex items-center text-gray-400 mt-4 relative">
                <IoIosArrowRoundForward className="absolute left-0"></IoIosArrowRoundForward>
                <span className="hover:text-yellow-300 ml-5">Ornaments</span>
            </div>
        </div>
        <img src={LeftBanner} className="mt-10" alt="" />
      </div>
      
      <div>
        <div className="flex mb-6">
            <div>
                <h3 className="text-xl font-semibold">About Jewellery Store</h3>
                <p className="w-96 mr-8 text-gray-400">Welcome to XYZ Jewelry, where every piece of jewelry is handcrafted with love and care to bring out the inner radiance in you. As a family-owned business with a passion for exquisite jewelry, we take pride in our unique designs and exceptional craftsmanship. </p>
            </div>
            <img src={about} alt="" />
        </div>
        <div>
            <h3 className="text-xl font-semibold">Products</h3>
            <div className="grid grid-cols-3 gap-2">
            {
                products.map(product => <CategoryProduct key={product.id} product={product}></CategoryProduct>)
            }
            </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
