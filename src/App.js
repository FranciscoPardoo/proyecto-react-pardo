import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <section className='App-section'>
        <ItemListContainer greeting="Hola, bienvenido a Balance"/>
      </section>
    </div>
  );
}

export default App;
