import React, {useContext} from 'react';
import { createBuyOrderFirestore } from '../../services/firebase';
import cartContext from '../../storage/CartContext';
import Button from '../Button/Button';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import BuyForm from './BuyForm';
import "./cartView.css";

function CartView() {
    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
    const navigate = useNavigate();

    if (cart.length === 0) return ( <h2>carrito vacio</h2> );

    function createBuyOrder(userData) {
        const buyData= {
            buyer: userData,
            items: cart,
            total: totalPriceInCart(),
            date: new Date(),
        };

        createBuyOrderFirestore(buyData).then((orderId) => {
            clear();
            navigate(`/checkout/${orderId}`);
            Swal.fire({
                title: `Gracias por tu compra`,
                text: `El identificador de tu orden es ${orderId}`,
                icon: "success",
            });
        });
    }

    return (
        <div className='cart-view'>
            <h2 className='cart-view-title'> Detalle de tu carrito </h2>
            <table className="cart-view-detail">
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </table>
            {cart.map((cartItem) => (
                        <table key={cartItem.id} className="cart-view-div">
                            <tr>
                                <td>
                                    <h3>{cartItem.title}</h3>
                                    <img src={cartItem.thumbnail} alt={cartItem.title} />
                                </td>
                                <td>
                                    <p>$ {cartItem.price}</p>
                                </td>
                                <td>
                                    <p>{cartItem.count}</p>
                                </td>
                                <td>
                                    <p>$ {cartItem.count * cartItem.price}</p>
                                </td>
                                <td>
                                    <Button onClick={()=>removeItem(cartItem.id)}>X</Button> 
                                </td>
                            </tr>
                        </table>
                ))}
            <Button onClick={clear}>VACIAR CARRITO</Button>
            <h2>Total a pagar: ${totalPriceInCart()}</h2>
            <BuyForm onSubmit={createBuyOrder}/>
        </div>
        );
    }

export default CartView