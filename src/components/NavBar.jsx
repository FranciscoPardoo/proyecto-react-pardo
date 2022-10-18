import Button from "./Button/Button";
import CartWidget from "./CartWidget/CartWidget";

function NavBar(){
    return(
        <>
            <h1>Balance</h1>
            <Button text= "Inicio"/>
            <Button text= "Buzos"/>
            <Button text= "Pantalones"/>
            <Button text= "Accesorios"/>
            <CartWidget/>
        </>
    )
}

export default NavBar;