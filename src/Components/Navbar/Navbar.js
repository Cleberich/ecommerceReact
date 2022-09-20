import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import LogoEcommerce from '../Logo/LogoEcommerce';

function NavbarBootstrap() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-negro" id="contenedorNavbar">
      <Container className="container-fluid">
        <Navbar.Brand><LogoEcommerce /></Navbar.Brand>
        <Navbar.Toggle className="badge bg-white " aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link className="text-white fw-bold" href="#features">NUEVO</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#features">MUJER</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#features">HOMBRE</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#features">NIÑO</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#features">NIÑA</Nav.Link>
            <Nav.Link className="fw-bold" id="text-warning" href="#pricing">SALE</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <button className="btn btn-dark-light fs-1"><CartWidget /></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;