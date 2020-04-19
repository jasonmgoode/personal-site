import React from 'react';
import logo from './logo.svg';
// import clock from './clock.svg';
import './App.css';
import MyNavbar from './components/Navbar.js'
// import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <MyNavbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon.
        </p>
      </header>
    </div>
  );
}

export default App;
