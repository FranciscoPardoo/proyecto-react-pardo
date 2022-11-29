import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function CheckOut() {

    return (
        <div className='check-out'>
            <h2> Gracias por tu compra! </h2>
            <Link to="/">
                <Button>VOLVER A INICIO</Button>
            </Link>
        </div>
    )
}

export default CheckOut