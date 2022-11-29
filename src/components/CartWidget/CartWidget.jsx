import React, { useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag }  from "@fortawesome/free-solid-svg-icons";
import cartContext from '../../storage/CartContext';
import "./cartWidget.css"

function CartWidget() {
    const {totalItemsInCart} = useContext(cartContext);

    return (
        <div>
            <FontAwesomeIcon className="carrito" icon={ faShoppingBag} size= "2x" />
            <>
                {totalItemsInCart() > 0 ? (<span>{totalItemsInCart()}</span>): (<></>)}
            </>
        </div>
    )
}

export default CartWidget