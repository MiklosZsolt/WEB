import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import eco from './Images/eco.png';
import milestone from './Images/milestone.png';
import tech from './Images/tech.png';
// import './proba.css';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div><h1>Latest news</h1></div>
        <CardGroup className="Grup">
          <Card className="About" style={{ maxWidth: '450px' }}>
            <Card.Body>
              <Card.Img variant="top" src={eco} className="Image" />
              <Card.Title className="Title">Sustainable Development</Card.Title>
              <Card.Text className="Text">
                Our agency is committed to making a positive impact on the environment and we are proud to announce that we have launched a new sustainable development initiative. This initiative focuses on the construction of environmentally-friendly and energy-efficient properties, which not only reduce our carbon footprint but also provide our clients with long-term cost savings. We are dedicated to promoting sustainable development practices and believe that it is our responsibility to contribute to the global effort to combat climate change.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="About" style={{ maxWidth: '450px' }}>
            <Card.Body>
              <Card.Img variant="top" src={milestone} className="Image" />
              <Card.Title className="Title">Record-Breaking Sales</Card.Title>
              <Card.Text className="Text">
                Our agency is proud to announce that we have achieved record-breaking sales for the third year in a row! Our team of expert realtors has successfully closed deals on some of the most sought-after properties in the world, from luxurious penthouses in New York City to sprawling estates in the French countryside. We attribute our success to our commitment to providing unparalleled customer service and our unwavering dedication to our clients.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="About" style={{ maxWidth: '450px' }}>
            <Card.Body>
              <Card.Img variant="top" src={tech} className="Image" />
              <Card.Title className="Title">Innovative Technology</Card.Title>
              <Card.Text className="Text">
                Our agency is excited to announce the launch of our new real estate platform, which utilizes the latest in innovative technology to provide a seamless and user-friendly experience for buyers and sellers alike. Our new platform features virtual tours, 3D renderings, and real-time data analysis to give our clients a comprehensive understanding of the properties they are interested in. We are thrilled to offer this cutting-edge technology to our clients and believe that it will revolutionize the way real estate is bought and sold.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    )
  }
}
