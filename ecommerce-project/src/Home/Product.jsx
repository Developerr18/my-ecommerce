export default function Product({ product }) {
    return (
        <div className="w-full h-120 p-5 shadow-lg rounded bg-white">
            <div className="mb-5 h-[200px]">
                <img
                    className="h-full w-full object-contain"
                    src={product.image}
                />
            </div>
            <p className="leading-[20px] h-[40px] overflow-hidden text-ellipsis">
                {product.name}
            </p>
            <div className="mt-2 flex items-center">
                <img
                    src={`images/ratings/rating-${
                        product.rating.stars * 10
                    }.png`}
                    className="w-25 mr-2"
                />
                <span className="text-green-700 text-lg">
                    {product.rating.count}
                </span>
            </div>
            <div className="font-bold mt-2">
                ${(product.priceCents / 100).toFixed(2)}
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
    );
}
