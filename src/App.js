import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";  
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './storage/CartContext';
import CartView from './components/CartView/CartView'; 
import CheckOut from './components/CheckOut/CheckOut';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryid" element={<ItemListContainer/>} />
            <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart"  element={<CartView/>}/>
            <Route path="/checkout/:orderid" element={<CheckOut/>} />
            <Route path="*" element={ <Error/> }/> 
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
