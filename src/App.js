import './App.css';
import NavbarBootstrap from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ActionBar from './Components/ActionBar/ActionBar';

function App() {
  return (
    <div className="App">
      <ActionBar action={'15% DE DESCUENTO TODOS LOS DÍAS CON SCOTIABANK'}/>
       <NavbarBootstrap  />
       <ItemListContainer greeting={'PRODUCTOS DESTACADOS'} />
       
    </div>
  );
}

export default App;
