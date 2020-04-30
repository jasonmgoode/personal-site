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
      <div className="view">
        <Container fluid>
          <Row fluid> 
          {/* <Row fluid className="align-items-center"> */}
            {/* <Col className="view align-items-center text-center right-panel" md={3}><p>test1</p></Col>
            <Col className="text-left" md={9}><p>test2</p></Col> */}
            <Col className="mx-auto text-center align-items-center">
            </Col>
            <Col md={8} className="ml-auto text-left">
              <div className="mytxt mr-auto d-block">
                  <h1> Hi, I'm Jason. </h1><br />
                  <h3> I use technology to solve interesting problems. </h3> <br />
                  <p> Most recently, I built mapping software for autonomous vehicles, and graduated from the University of Chicago with an M.S. in Computer Science. Prior graduate school, I held strategy consulting and economic development positions focused on technology and innovation.</p>
                </div>
            </Col>
            <Col className="ml-auto text-left"></Col>
          </Row>
          <Row>
          </Row>

        </Container>
      </div>
      <Footer />
    </React.Fragment>

  );
}

export default App;
