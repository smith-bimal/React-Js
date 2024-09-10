import Product from "./Product";
import "./ProductTab.css";

export default function ProductTab() {
    return (
        <>
        <h3>Blockbuster Deals on Computer Accessories | Shop Now</h3>
        <div className="ProductTab">
        <Product title="Logitech MX Master 3S" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-Transformer" idx={2}/>
        <Product title="Portronics Toad 23 Wireless Mouse" idx={3}/>
        </div>
        </>
    )
}