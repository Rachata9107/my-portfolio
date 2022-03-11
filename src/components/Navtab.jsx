import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const navLogo = "https://img.icons8.com/color/200/000000/source-code.png";
const githubLogo = "https://img.icons8.com/ios-filled/28/000000/github.png";
const githubLink = "https://github.com/Rachata9107";

function Navtab() {
  return (
    <Navbar
      className="p-1"
      bg="dark"
      variant="dark"
      sticky="top"
      expand="md"
    >
      <Container fluid className="m-0 p-0">
        <Navbar.Brand className="p-1 mx-1 my-0">
          <Image className="mx-1" width="32px" src={navLogo} />
          {/* Dev'z */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav mx-2" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Experience">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/Education">
              Education
            </Nav.Link>
            <Nav.Link as={Link} to="/Skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/Project">
              Project
            </Nav.Link>
            <Nav.Link className="navbar-github" target="_blank" href={githubLink}>
              <img src={githubLogo} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navtab;
