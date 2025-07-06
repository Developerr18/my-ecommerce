import { useState } from "react";
import { products } from "../../products/productsData";

const product1 = products[1];
const product2 = products[2];

export default function Homepage() {
    return (
        <>
            <div className="product-container max-w-60 h-120 mt-20 p-5 inline-block shadow-lg rounded bg-white m-5">
                <div className="mb-5 h-50">
                    <img className="h-full" src={product1.image} />
                </div>
                <p className="leading-[20px] h-[40px] overflow-hidden text-ellipsis">
                    {product1.name}
                </p>
                <div className="mt-2 flex items-center">
                    <img
                        src={`images/ratings/rating-${
                            product1.rating.stars * 10
                        }.png`}
                        className="w-25 mr-2"
                    />
                    <span className="text-green-700 text-lg">
                        {product1.rating.count}
                    </span>
                </div>
                <div className="font-bold mt-2">
                    ${(product1.priceCents / 100).toFixed(2)}
                </div>
                <select className="mt-3.5 w-[50px] border border-gray-400 px-2 py-1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className="block mt-5 bg-sky-500 font-semibold w-full py-2 text-white rounded cursor-pointer hover:bg-sky-600 transition duration-200">
                    Add To Cart
                </button>
            </div>

            <div className="product-container max-w-60 h-120 mt-20 p-5 inline-block shadow-lg rounded bg-white m-5">
                <div className="mb-5 h-50">
                    <img className="h-full" src={product2.image} />
                </div>
                <p className="leading-[20px] h-[40px] overflow-hidden text-ellipsis">
                    {product2.name}
                </p>
                <div className="mt-2 flex items-center">
                    <img
                        src={`images/ratings/rating-${
                            product2.rating.stars * 10
                        }.png`}
                        className="w-25 mr-2"
                    />
                    <span className="text-green-700 text-lg">
                        {product2.rating.count}
                    </span>
                </div>
                <div className="font-bold mt-2">
                    ${(product2.priceCents / 100).toFixed(2)}
                </div>
                <select className="mt-3.5 w-[50px] border border-gray-400 px-2 py-1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className="block mt-5 bg-sky-500 font-semibold w-full py-2 text-white rounded cursor-pointer hover:bg-sky-600 transition duration-200">
                    Add To Cart
                </button>
            </div>
        </>
    );
}
