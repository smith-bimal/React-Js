import Price from "./Price";
import "./Product.css";

export default function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let descriptions = [
        "8,000 DPI & 5 Programmable buttons",
        "Intuitive Touch Surface & Designed for iPad Pro",
        "Braided cable, high quality USB connector & Aluminum body, Backlight LED On / Off function",
        "Wireless Mouse 2.4GHz & Optical Orientation>"
    ]
    return (
        <div className="Product">
            <h4>Title {title}</h4>
            <p>{descriptions[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}
