import React from 'react';
import logo from '../logo.svg';
// import clock from './clock.svg';
import '../App.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


function MyNavbar() {
  return (
    <div className="Navbar">
      <Navbar fixed="top" bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contac">Contact</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      <br />
    </div>
  );
}

export default MyNavbar;
