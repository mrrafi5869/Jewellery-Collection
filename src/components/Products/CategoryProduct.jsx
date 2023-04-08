import React from "react";
import './CategoryProducts.css'
const CategoryProduct = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="w-52 h-[345px] bg-white text-center border border-gray-400 rounded-md card">
      <img src={img} className="w-full h-52 rounded-md" alt="" />
      <div className="rating mx-auto">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
          
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
          checked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400"
        />
      </div>
      <p className="text-gray-400 mx-2 my-2">{name}</p>
      <p className="font-semibold mx-2">
        <del className="text-gray-400 mx-2">${price * 2}</del> ${price}
      </p>
      <button className="btn btn-sm info hover:bg-yellow-400">Add Now</button>
    </div>
  );
};

export default CategoryProduct;
