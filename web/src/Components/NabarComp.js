import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Home from './Home';
import InchirieriVanzari from './InchirieriVanzari';
import News from './News';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Client from './Client';
import Agent from './Agent';
import Program from './Program';


export default class NavBarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand as={Link} to="/">
                  Home
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/Aboutus">
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/InchirieriVanzari">
                    Sale/Rent
                  </Nav.Link>
                  <Nav.Link as={Link} to="/News">
                    News
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <Form inline>
                  <Link to="/login">
                    <Button variant="outline-info" className="mr-2">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="info">Register</Button>
                  </Link>
                  <Nav.Link as={Link} to="/Program">
                     Program
                  </Nav.Link>
                </Form>
              </Container>
            </Navbar>
          </>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Aboutus" element={<Aboutus />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/InchirieriVanzari" element={<InchirieriVanzari />} />
            <Route exact path="/News" element={<News />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/Client" element={<Client />} />
            <Route exact path="/Agent" element={<Agent />} />
            <Route exact path="/Program" element={<Program />} />

      
            

          </Routes>
        </div>
      </Router>
    );
  }
}
