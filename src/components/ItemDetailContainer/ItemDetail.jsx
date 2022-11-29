import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./itemDetail.css";

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);
    const {addToCart} = useContext(cartContext);

function onAddToCart(count) {
    const itemForCart = {
        ...product,
        count,
    }

    addToCart(itemForCart);

    setIsInCart(true);
    }

return (
    <div className="card-item-detail">
        <div>
            <img className="card-item-detail_img" src={product.thumbnail} alt="Product img" />
        </div>
        <div className="card-item-detail-description">
            <div className="card-item-detail_detail">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4 className="priceTag">$ {product.price}</h4>
            </div>
            {!isInCart ? (
                <ItemCount
                text="Agregar al carrito"
                onAddToCart={onAddToCart}
                stock={product.stock}
                />
            ) : (
            <div>
                <Link to="/cart">
                    <Button>Ir al Carrito</Button>
                </Link>
                <Link to="/">
                    <Button>Seguir Comprando</Button>
                </Link>
            </div>
            )}
        </div>
    </div>
    );
}

export default ItemDetail;