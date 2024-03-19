import React from 'react'
import '../../styles/hotels-styles/hotels.css';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <section id='footer' className='bg' >
        <Container className='py-5'>
      <Row class="section__container footer__container d-flex align-items-center ">
        <Col lg="5" class="footer__col">
        <div className="logo" style={{fontSize: "30px", margin: "20px"}}>
            <span className='explorer' style={{color: "#ffa500"}}>RAW</span>
            <span className='raw raw2' >-TheExplorers</span>
        </div>
          <p class="description pe-5 section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            laudantium unde. Doloremque eaque debitis laborum labore voluptates
            iste molestiae consectetur.
          </p>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-youtube-fill" style={{color: "#ffa500",textDecoration: "none"}}></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-instagram-line" style={{color: "#ffa500",textDecoration: "none"}}></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-facebook-fill" style={{color: "#ffa500",textDecoration: "none"}}></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-linkedin-fill" style={{color: "#ffa500",textDecoration: "none"}}></i></a>
            </li>
          </ul>
        </Col>
        <Col lg="3" class="footer__col">
          <h4 className='description2' style={{color: "#ffa500" , fontSize: "30px", margin: "20px"}}>Services</h4>
          <div class="footer__links">
            <li className='description'><a href="#">Online Booking</a></li>
            <li className='description'><a href="#">Room Customization</a></li>
            <li className='description'><a href="#">Virtual Tours</a></li>
            <li className='description'><a href="#">Special Offers</a></li>
            <li className='description'><a href="#">Concierge Services</a></li>
            <li className='description'><a href="#">Customer Support</a></li>
          </div>
        </Col>
        <Col lg="3" class="footer__col">
          <h4 className='description2' style={{color: "#ffa500", fontSize: "30px", margin: "20px"}}>Contact Us</h4>
          <div class="footer__links">
            <li>
              <span><i class="ri-phone-fill" style={{color: "#ffa500"}}></i></span>
              <div>
                <h5>Phone Number</h5>
                <p className='text-light'>+91 9876543210</p>
              </div>
            </li>
            <li>
              <span><i class="ri-record-mail-line" style={{color: "#ffa500"}}></i></span>
              <div>
                <h5>Email</h5>
                <p className='text-light'>info@hotelmiranda.com</p>
              </div>
            </li>
            <li>
              <span><i class="ri-map-pin-2-fill" style={{color: "#ffa500"}}></i></span>
              <div>
                <h5>Location</h5>
                <p className='text-light'>First St. NYC</p>
              </div>
            </li>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Footer