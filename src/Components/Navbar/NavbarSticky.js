import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import LogoEcommerce from '../Logo/LogoEcommerce';
import { Link } from 'react-router-dom'

const NavbarSticky = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" className="col-12 justify-content-start bg-white my-5" id="contenedorNavbarSticky">
        <Container className="" id="sticky">
        <Link to="/">
          <LogoEcommerce />
          </Link>
          <Link to="/camperas" className='text-dark text-decoration-none fs-6 mx-2'>CAMPERAS</Link>
            <Link to="/camisas"  className='text-dark text-decoration-none fs-6 mx-2'>CAMISAS</Link>
            <Link to="/pantalones"  className='text-dark text-decoration-none fs-6 mx-2'>PANTALONES & JEANS</Link>
            <Link to="/calzados"  className='text-dark text-decoration-none fs-6 mx-2'>CALZADOS</Link>
            <Link to="/vestidos"  className='text-dark text-decoration-none fs-6 mx-2'>VESTIDOS</Link>
            <Link to="/sale"  className='text-dark text-decoration-none fs-6 mx-2'>SALE</Link>
            <button className="btn btn-dark-light fs-1"><CartWidget /></button>

      
      </Container>
      </Navbar>
    )
}
export default NavbarSticky