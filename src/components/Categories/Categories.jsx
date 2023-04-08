import React from "react";
import {  IoIosArrowRoundForward  } from 'react-icons/io';
import {  BsPlus  } from 'react-icons/bs';
import about from '../../assets/image/about-us.jpg'
import LeftBanner from '../../assets/image/left-banner.jpg'
import Blog from "../Blog/Blog";
const Categories = () => {
  return (
    <section className="w-9/12 mx-auto flex justify-around">
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
        <div className="flex">
            <div>
                <h3 className="text-xl font-semibold">About Jewellery Store</h3>
                <p className="mr-8 text-gray-400">Lorem ipsum presta shop amet Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
            </div>
            <img src={about} alt="" />
        </div>
        <div>
            <Blog></Blog>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Categories;
