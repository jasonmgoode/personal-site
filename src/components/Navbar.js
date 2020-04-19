import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


function MyNavbar() {
  return (
    <div className="Navbar">
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Jason Goode</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contac">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}

export default MyNavbar;
