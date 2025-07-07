import Product from "./Product";

export default function ProductsGrid({ products }) {
    if (products) {
        return (
            <div>
                <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] mt-20 px-5">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        );
    }
}
