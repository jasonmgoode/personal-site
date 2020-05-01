import React from 'react';
import './App.css';
// import Navbar from './components/Navbar.js';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from './JasonGoode_Resume.pdf';
import headshotPhoto from './images/DSC_3012.jpg';

function App() {

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="view">
        <Container fluid>
          <Row> 
            <Col xs={12} sm={12} md={2} className="text-center">
            </Col>
            <Col xs={12} sm={12} md={2} className="mx-auto text-center">
              <Image fluid src={headshotPhoto} className="pic" />
            </Col>
            <Col xs={12} sm={12} md={6} className="m-auto text-left mytxt">
              <div className="m-auto">
                  <h1> Hi, I'm Jason. </h1>
                  <h3> I use technology to solve interesting problems. </h3> <br />
                  <p> Most recently, I built mapping software for autonomous vehicles, and graduated from the University of Chicago with an M.S. in Computer Science. Prior graduate school, I held strategy consulting and economic development positions focused on technology and innovation.</p>
                  <Button variant="info" href={Pdf} download>
                    Resume
                  </Button>
              </div>
            </Col>
            <Col xs={12} sm={12} md={2} className="text-center">
            </Col>
          </Row >
          <Row>
          </Row>
        </Container>
      </div>
      <Footer />
    </React.Fragment>

  );
}

export default App;
