import React from 'react';
import './App.css';
// import Navbar from './components/Navbar.js';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from './JasonGoode_Resume.pdf';

function App() {

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="view">
        <Container fluid>
          <Row> 
            <Col xs={2} sm={2} md={2} className="mx-auto text-center align-items-center">
            </Col>
            <Col xs={12} sm={8} md={8} className="ml-auto text-left">
              <div className="mytxt mr-auto d-block">
                  <h1> Hi, I'm Jason. </h1><br />
                  <h3> I use technology to solve interesting problems. </h3> <br />
                  <p> Most recently, I built mapping software for autonomous vehicles, and graduated from the University of Chicago with an M.S. in Computer Science. Prior graduate school, I held strategy consulting and economic development positions focused on technology and innovation.</p>
              </div>
              <Button variant="info" href={Pdf} download>
                Resume
              </Button>
            </Col>
            <Col xs={2} sm={2} md={2} className="ml-auto text-left"></Col>
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
