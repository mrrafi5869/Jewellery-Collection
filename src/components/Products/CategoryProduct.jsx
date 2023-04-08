import React, { useState } from "react";
import "./CategoryProduct.css";
const CategoryProduct = ({ product }) => {
  const { img, name, price } = product;
  const [booked, setBooked] = useState([]);

  const handleBook = (singleProduct) => {
  //   setBooked([...booked, singleProduct]);
  //   let p = {};
  //   const storedProduct = localStorage.getItem("products");
  //   if (storedProduct) {
  //     p = JSON.parse(storedProduct);
  //   }
  //   console.log(p);
  //   saveItemToLocalStorage()
  //   localStorage.setItem(name, price);
  // };

  // const getProductFromLocalStorage = () => {
  //   let savedProduct =  localStorage.getItem('products');
  //   let product = {};
  //   if(savedProduct){
  //     product = JSON.parse(savedProduct)
  //   }
  //   return product;
  // }

  // const saveItemToLocalStorage = (p, quantity) => {
  //     const productStringified = JSON.stringify(product);
  //     localStorage.setItem('products', productStringified)
  }

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
      <button
        className="btn btn-sm info hover:bg-yellow-400 rounded-b-md rounded-t-none"
        onClick={() => handleBook(product)}
      >
        Add Now
      </button>
    </div>
  );
};

export default CategoryProduct;
