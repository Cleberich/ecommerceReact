import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import '.Components/Navbar/Navbar.css';
function NavbarBootstrap() {
  return (
    // <Navbar collapseOnSelect expand="lg" className="bg-rojito">
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand><h1 className="text-primary fw-bolder">Cleber shop</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white fw-bold" href="#features">Pantalones</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#pricing">Camperas</Nav.Link>
            <Nav.Link className="text-white fw-bold" href="#pricing">Remeras</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-white fw-bold" href="#deets">Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;