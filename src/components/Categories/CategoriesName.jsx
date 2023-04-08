import React from 'react';
import LeftBanner from '../../assets/image/left-banner.jpg'
import { BsPlus } from 'react-icons/bs';
import { IoIosArrowRoundForward } from 'react-icons/io';

const CategoriesName = () => {
    return (
        <div>
        <h4 className="text-xl text-center lg:text-left">Categories</h4>
        <div className="bg-white w-56 mx-auto shadow-md shadow-gray-300 border border-gray-300 rounded-md mt-2 mr-8 p-2">
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
        <h4 className="text-xl mt-10 text-center lg:text-left">Brands</h4>
        <div className="bg-white w-56 mx-auto shadow-md shadow-gray-300 border border-gray-300 rounded-md mt-2 mr-8 p-2">
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
        <img src={LeftBanner} className="mt-10 mx-auto lg:mx-0 mb-8" alt="" />
      </div>
    );
};

export default CategoriesName;