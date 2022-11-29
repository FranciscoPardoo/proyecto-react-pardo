import React, { useState} from 'react';
import InputForm from './InputForm';
import Button from '../Button/Button';
import "./buyForm.css"

export default function BuyForm(props) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    function onInputChange(e) {
        const InputName = e.target.name;
        const value = e.target.value;

        const newUserData = {...userData};
        newUserData[InputName] = value;
        setUserData(newUserData);
    }

        function onSubmit(e) {
            e.preventDefault();
            props.onSubmit(userData);
        }

    return (
        <form className='formulario' onSubmit={onSubmit}>
            <InputForm
                required
                title = "Nombre"
                name = "name"
                value = {userData.name}
                onInputChange = {onInputChange}
            />
            <InputForm
                required
                title="Email"
                name="email"
                value={userData.email}
                onInputChange={onInputChange}
            />
            <InputForm
            required
            title="Teléfono"
            name="phone"
            value={userData.phone}
            onInputChange={onInputChange}
            />
            <Button onClick={onSubmit}>FINALIZAR COMPRA</Button>
        </form>
    )
}

