import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon icon={ faShoppingBag} />
        </div>
    )
}

export default CartWidget