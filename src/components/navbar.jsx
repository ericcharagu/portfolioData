import Container from "react-bootstrap/Container";
import { Nav, Image, Navbar, NavDropdown } from "react-bootstrap";
import echara from "../img/logoNav.png";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar sticky="top" expand="sm" id="navId">
      <Container>
        <Navbar.Brand href="/home">
          <Image roundedCircle src={echara} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link id="navLink" href="/skills">
              SKILLS
            </Nav.Link>
            <Nav.Link id="navLink" href="/projects">
              PROJECT
            </Nav.Link>
            <Nav.Link id="navLink" href="/message">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
