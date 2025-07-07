import { products } from "../../products/productsData";
import Header from "../Header";
import ProductsGrid from "./ProductsGrid";

export default function Homepage() {
    return (
        <>
            <Header />
            <ProductsGrid products={products} />
        </>
    );
}
