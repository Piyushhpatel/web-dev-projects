import React, {useState} from "react";
import './ProductItem.css';
import ProductDate from './ProductDate';
import Card from "./Card";

const ProductItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => { 
        setTitle("Popcorn");
        console.log(`Item ${title} Added to cart`);
    }

    return (
        <Card className="product-item">
            <ProductDate date={props.date} />
            <div className="product-item_description">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Card>
    );
}

export default ProductItem;