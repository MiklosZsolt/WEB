import React, { Component } from 'react';
import rsz_1newap2 from "./Images/rsz_1newap2.png";
import rsz_1newap111 from "./Images/rsz_1newap111.png";
import rsz_newap3 from "./Images/rsz_newap3.png";
import rsz_newhouse2 from './Images/rsz_house2.png';
import rsz_2newhouse1 from './Images/rsz_2newhouse1.png';
import rsz_newhouse3 from './Images/rsz_newhouse3.png';
import Carousel from "react-bootstrap/Carousel";


export default class Case extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflowY: 'scroll' }}>
        <div style={{ marginRight: '20px' }}>
          <h4 >Apartment with four bedrooms for sale with parking place!</h4>
          <h3>100.000 EURO</h3>
          <Carousel style={{ height: '500px', width: '500px', left: '60px' }}>
            <Carousel.Item>
              <img
            
                src={rsz_1newap2}
          
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
             
                src={rsz_newap3}
        
              />

        
            </Carousel.Item>
            <Carousel.Item>
              <img
               
                src={rsz_1newap111}
              
              />

       
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <h4 >House with five bedroom and yard with lot of space for sale!</h4>
          <h3>1200 EURO</h3>

                      
          <Carousel style={{ height: '500px', width: '500px', left: '100px' }}>
            <Carousel.Item>
              <img
                className="FirstSlide"
                src={rsz_newhouse2}
                alt="First slide"
              />
      
            </Carousel.Item>
            <Carousel.Item>
              <img
               
                src={rsz_2newhouse1}
                
              />

<Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
        <img
          className="ThirdSlide"
          src={rsz_newhouse3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    );
  }
}
                 
       
            


//     import Ap1 from './Images/Ap1.png';
// import Ap2 from './Images/Ap2.png';
// import Ap3 from './Images/Ap3.png';