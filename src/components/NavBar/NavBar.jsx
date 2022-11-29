import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"; 
import "./navBar.css"; 

function NavBar() {
return (
    <nav className="nav-menu">
        <Link to="/"><h1>Mapple</h1></Link>
        <Link to="/category/iphone">iPhone</Link>
        <Link to="/category/mac">Mac</Link>
        <Link to="/category/ipad">iPad</Link>
        <Link to="/Cart"> <CartWidget/> </Link> 
    </nav> 
    );
}

export default NavBar;