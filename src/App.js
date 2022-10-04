import './App.css';
import NavbarBootstrap from './Components/Navbar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ActionBar from './Components/ActionBar/ActionBar';
import {  BrowserRouter, Routes,  Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavbarSticky from './Components/Navbar/NavbarSticky';


function App() {

  return (
    <div className="App">
      <ActionBar action={'15% DE DESCUENTO TODOS LOS DÍAS CON SCOTIABANK'}/>
      <BrowserRouter>
            <NavbarSticky/>
            <NavbarBootstrap  />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'CATEGORÍAS'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'CATEGORÍAS'} />} />
              <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
