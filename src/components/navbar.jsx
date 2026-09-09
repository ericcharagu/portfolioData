import Container from "react-bootstrap/Container";
import { Nav, Image, Navbar } from "react-bootstrap";
import echara from "../img/logoNav.png";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar sticky="top" expand="sm" id="navId">
      <Container>
        <Navbar.Brand href="/">
          <Image roundedCircle src={echara} fluid style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="navLink">Home</Nav.Link>
            <Nav.Link href="/services" className="navLink">Services</Nav.Link>
            <Nav.Link href="/projects" className="navLink">Projects</Nav.Link>
            <Nav.Link href="/about" className="navLink">About</Nav.Link>
            <Nav.Link href="/contact" className="navLink">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;