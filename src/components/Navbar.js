import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

function MyNavbar() {
  return (
    <Container>
      <Navbar fixed="top" bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">Jason Goode</Navbar.Brand> */}
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/experience.html">Experience</Nav.Link>
          {/* <Nav.Link href="/skills.html">Skills</Nav.Link> */}
          <Nav.Link href="/contact.html">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;
