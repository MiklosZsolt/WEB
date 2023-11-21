import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
     
      <div className="contact-form">
         <div className="body">
        
         <div><h1>Leave your contact and we will contact you!</h1></div>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          
        </Form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.903967355807!2d-118.40895748447567!3d33.94158098063573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c600d0f64b11%3A0xd67a64f0c4e4aa4c!2sBeverly%20Hills%2C%20CA%2090210%2C%20USA!5e0!3m2!1sen!2sph!4v1649020786404!5m2!1sen!2sph"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      </div>
      
    );
  }
}
