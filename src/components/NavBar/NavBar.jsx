import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
return (
    <nav className="nav-menu">
        <Link to="/"><h1>FreeMarket</h1></Link>
        <Link to="/category/smartphones">Smartphones</Link>
        <Link to="/category/laptops">Laptops</Link>
        <Link to="/category/fragrances">Perfumes</Link>
        <Link to="/category/skincare">Cremas</Link>
        <CartWidget />
    </nav>
    );
}

export default NavBar;