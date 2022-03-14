import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const navLogo = "https://img.icons8.com/color/200/000000/source-code.png";
const githubLogo = "https://img.icons8.com/ios-filled/28/000000/github.png";
const githubLink = "https://github.com/Rachata9107";

function Navtab() {
  return (
    <Navbar
      collapseOnSelect
      className="p-1"
      bg="dark"
      variant="dark"
      sticky="top"
      expand="md"
    >
      <Container fluid className="m-0 p-0">
        <Navbar.Brand className="nav-brand" href="#" as={Link} to="/">
          <Image className="mx-1" width="32px" src={navLogo} />
          <p>My Profile</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav mx-2" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#" as={Link} to="/Experience">
              Experience
            </Nav.Link>
            <Nav.Link href="#" as={Link} to="/Education">
              Education
            </Nav.Link>
            <Nav.Link href="#" as={Link} to="/Skills">
              Skills
            </Nav.Link>
            <Nav.Link href="#" as={Link} to="/Project">
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
