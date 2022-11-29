import React from "react";
import Button from "../Button/Button"; 
import "./item.css";
import { Link } from "react-router-dom";


function Item({product}) {

let urlDetail = `/detalle/${product.id}`;

return (
    <div className="card">
        <div className="card-img">
            <img src={product.thumbnail} alt="Product img" />
        </div>
        <div className="card-detail">
            <h2>{product.title}</h2>
            <h4>{product.subtitle}</h4>
            {product.discount && <h4 className= "offer">Descuento: {product.discount}%</h4>}
            <h4 style={ {color: product.discount? "green" : "inherit"} }className="priceTag">$ {product.price}</h4>
        </div>
        <Link to={urlDetail}>
            <Button>Ver más</Button>
        </Link>
    </div>
    );
}

export default Item;