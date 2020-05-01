import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import githubLogo from '../images/github-logo.png';
import linkedinLogo from '../images/linkedin-logo.png';
import twitterLogo from '../images/twitter-2012-positive-logo-916EDF1309-seeklogo.com.png';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="m-auto">
          <Col className="my-auto mx-auto text-center">
            <a 
              className="email" 
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jmg627@gmail.com&su=Hello&tf=1"
              target="_blank"
              rel="noopener noreferrer"
            >jmg627@gmail.com</a>
          </Col>
          <Col className="m-auto text-center">
            <div className="mx-auto">
              <a href="https://github.com/jasonmgoode" target="_blank" rel="noopener noreferrer">
                <Image fluid src={githubLogo} width="60px" height="60px"/>
              </a>
            </div>
          </Col>
          <Col className="m-auto text-center">
            <div className="m-auto d-block">
              <a href="https://linkedin.com/in/jmgoode" target="_blank" rel="noopener noreferrer">
                <Image fluid src={linkedinLogo} width="40px" height="40px"/>
              </a>
            </div>
          </Col>
          <Col className="m-auto text-center">
            <div className="m-auto d-block">
              <a href="https://twitter.com/jm_goode" target="_blank" rel="noopener noreferrer">
                <Image fluid src={twitterLogo} width="40px" height="40px"/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
