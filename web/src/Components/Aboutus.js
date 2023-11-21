import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import poza from './Images/best.jpg'
import poza2 from './Images/join.jpg'
import poza3 from './Images/about.jpg'
import './AboutUs.css'



export default class AboutUs extends Component {
  render() {
    return (
      <div>
         <div><h1>About TheAgency!</h1></div>
        <CardGroup className="Grup">
          <Card className="About" style={{ maxWidth: '450px' }}>
            <Card.Body>
              <Card.Title>About the company</Card.Title>
              <Card.Img variant="top" src={poza} style={{ marginBottom: '1rem' }} />
              <Card.Text>
                Welcome to ABC Real Estate, established in 2005 and committed to providing exceptional service and expertise in buying, selling, and renting properties. Our team of experienced agents will guide you through every step of the process, ensuring a smooth and stress-free experience. Join us in finding your dream home today.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="About" style={{ maxWidth: '450px' }}>
            <Card.Body>
              <Card.Title>The best of the best</Card.Title>
              <Card.Img variant="top" src={poza2} style={{ marginBottom: '1rem' }} />
              <Card.Text>
                When it comes to excellence, there is no compromise. That's why we always strive to be the best of the best. Our commitment to quality, innovation, and service has earned us a reputation as leaders in our field. Whether you're looking for a product or a partner, you can trust that we will deliver nothing but the best. Join us and experience the pinnacle of excellence.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="About" style={{ maxWidth: '450px' }}>
            <Card.Body>
              <Card.Title>Join our team!</Card.Title>
              <Card.Img variant="top" src={poza3} style={{ marginBottom: '1rem' }} />
              <Card.Text>
                Join our team and be a part of an exciting and dynamic work environment. We offer opportunities for personal growth and development, and a chance to work with a group of talented and passionate individuals. Whether you're just starting your career or looking for a new challenge, we welcome you to join us and help us make a difference in the world.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    )
  }
}
