import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import LogoEcommerce from '../Logo/LogoEcommerce';
import { Link } from 'react-router-dom'

function NavbarBootstrap() {

  return (
    <Navbar collapseOnSelect expand="lg" className="col-12 justify-content-between bg-white my-5 " id="contenedorNavbar">
      <Container className="container-fluid mt-4" id="desktop">
        <div className="d-block mx-auto"><Navbar.Brand>
          <Link to="/">
          <LogoEcommerce />
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle className="badge bg-white " aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Link to="/category/camperas" className='text-dark text-decoration-none fs-6 mx-2'>CAMPERAS</Link>
            <Link to="/category/camisas"  className='text-dark text-decoration-none fs-6 mx-2'>CAMISAS</Link>
            <Link to="/category/pantalones"  className='text-dark text-decoration-none fs-6 mx-2'>PANTALONES & JEANS</Link>
            <Link to="/category/blazer"  className='text-dark text-decoration-none fs-6 mx-2'>BLAZER & TAPADOS</Link>
            <Link to="/category/vestidos"  className='text-dark text-decoration-none fs-6 mx-2'>VESTIDOS</Link>
          </Nav>
          <Nav className="d-flex">
            <button className="btn btn-dark-light fs-1"><CartWidget /></button>
          </Nav>
        </Navbar.Collapse>
        </div>
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