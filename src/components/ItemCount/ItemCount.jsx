import React, { useState } from "react";
import Button from "../Button/Button";
import "./itemCount.css";

function ItemCount({ stock, onAddToCart, text }) {
    const [count, setCount] = useState(1);

function handleAdd(evt) {
    if (count < stock) setCount(count + 1);
}

function handleSubstract(evt) {
    if (count > 1) setCount(count - 1);
}

return (
    <div className="itemcount_container">
        <div className="itemcount_control">
            <Button color="#903024" onClick={handleSubstract}>
                -
            </Button>
            <span>{count}</span>
            <Button color="#239044" onClick={handleAdd}>
                +
            </Button>
        </div>
        <div className="itemcount_btns">
            <Button onClick={() => onAddToCart(count)}>{text}</Button>
        </div>
    </div>
);
}

export default ItemCount;