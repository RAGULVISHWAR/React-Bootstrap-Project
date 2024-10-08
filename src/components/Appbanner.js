import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Container,Row,Col} from 'react-bootstrap';

const Appbanner = () => {
  return (
    <Container>
        <Row className="justify-content-center align-items-center">
            <Col lg={8}>
               <Carousel>
                    <Carousel.Item interval={2000}>
                        <img src={require('../assets/wallpaperflare.com_wallpaper.jpg')} className="d-block w-100" alt="1"/>
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img src={require('../assets/cafe.webp')} className="d-block w-100" alt="2"/>
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={require('../assets/Genshin Impact Beautiful Scenery.jpeg')} className="d-block w-100" alt="3"/> 
                        <Carousel.Caption >
                        <h3>Third slide label</h3>
                        <p className='d-none d-sm-block'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
            </Col>
        </Row>
    </Container>
  )
}

export default Appbanner