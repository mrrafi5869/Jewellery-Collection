import React, { useEffect, useState } from "react";
import about from '../../assets/image/about-us.jpg'
import CategoryProduct from "../Products/CategoryProduct";
import CategoriesName from "./CategoriesName";
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
    <section className="lg:w-3/5 mx-auto flex flex-col lg:flex-row lg:justify-around">
        <CategoriesName></CategoriesName>      
      <div>
        <div className="flex flex-col md:flex-row mb-6">
            <div>
                <h3 className="text-xl font-semibold">About Jewellery Store</h3>
                <p className="w-96 mr-8 text-gray-400">Welcome to XYZ Jewelry, where every piece of jewelry is handcrafted with love and care to bring out the inner radiance in you. As a family-owned business with a passion for exquisite jewelry, we take pride in our unique designs and exceptional craftsmanship. </p>
            </div>
            <img src={about} alt="" />
        </div>
        <div>
            <h3 className="text-xl font-semibold">Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
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
