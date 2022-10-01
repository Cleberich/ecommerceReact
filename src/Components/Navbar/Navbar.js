import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import LogoEcommerce from '../Logo/LogoEcommerce';
import { Link } from 'react-router-dom'

function NavbarBootstrap() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-negro" id="contenedorNavbar">
      <Container className="container-fluid" id="desktop">
        <Navbar.Brand>
          <Link to="/">
          <LogoEcommerce />
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle className="badge bg-white " aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Link to="/camperas" className='text-white text-decoration-none fs-6 mx-2'>CAMPERAS</Link>
            <Link to="/camisas"  className='text-white text-decoration-none fs-6 mx-2'>CAMISAS</Link>
            <Link to="/pantalones"  className='text-white text-decoration-none fs-6 mx-2'>PANTALONES & JEANS</Link>
            <Link to="/calzados"  className='text-white text-decoration-none fs-6 mx-2'>CALZADOS</Link>
            <Link to="/vestidos"  className='text-white text-decoration-none fs-6 mx-2'>VESTIDOS</Link>
            <Link to="/sale"  className='text-white text-decoration-none fs-6 mx-2'>SALE</Link>
          </Nav>
          <Nav className="d-flex">
            <button className="btn btn-dark-light fs-1"><CartWidget /></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className="container-fluid bg-negro" id="mobile">
        <div className='row' id="mobile">
        <div className='col ms-2'><CartWidget /></div>
        <div className='col '><LogoEcommerce/></div>
        <div className='col me-0'>
          <Navbar.Toggle className="badge bg-white " aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link className="text-white fw-bold" href="#features">NUEVO</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#features">MUJER</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#features">HOMBRE</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#features">NIÑO</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#features">NIÑA</Nav.Link>
            <Nav.Link className="fw-bold" id="text-warning" href="#pricing">SALE</Nav.Link>
          </Nav>
        </Navbar.Collapse></div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;