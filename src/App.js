import React from 'react';
import logo from './logo.svg';
import tahoe from './images/tahoe.jpg';
import './App.css';
import Navbar from './components/Navbar.js';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Container fluid className="view">
        <Row fluid> 
        {/* <Row fluid className="align-items-center"> */}
          {/* <Col className="view align-items-center text-center right-panel" md={3}><p>test1</p></Col>
          <Col className="text-left" md={9}><p>test2</p></Col> */}
          <Col><p>test1</p></Col>
          <Col><p>test2</p></Col>
          <Col><p>test2</p></Col>
        </Row>
          <Col>TESTING</Col>
        <Row>
        </Row>

      </Container>
      <Footer />
    </React.Fragment>

  );
}

export default App;
