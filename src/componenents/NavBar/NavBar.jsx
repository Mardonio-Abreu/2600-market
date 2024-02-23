import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../logo/logo_250x150.png";
import CartWidget from "../CartWidget/CartWidget.jsx";

function NavigationBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="light">
        <Container className="d-flex .align-items-start">
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Hoodies</Nav.Link>
            <Nav.Link>T-shirts</Nav.Link>
            <Nav.Link>Caps</Nav.Link>
            <Nav.Link>Totes</Nav.Link>
          </Nav>
          
            <CartWidget quantity={" 5"} />
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
