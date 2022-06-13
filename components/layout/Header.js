import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="fs-2 fw-bold text-danger">
            ECOM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>

              <NavDropdown title={"Ahmed"} id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/">Dashboard</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
