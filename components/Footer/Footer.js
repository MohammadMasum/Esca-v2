import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from './logo.svg'

const Footer = () => {
  return (
    <footer className='footer-area'>
      <div className="footer-top">
        <Container>
          <Row className='justify-content-center'>
            <Col lg={4}>
              <div className='footer-about'>
                <div className='footer-logo'>
                  <img src={FooterLogo.src} alt='' />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt sit amet massa quis laoreet. Aliquam diam lectus, egestas venenatis </p>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                <Col lg={3} md={6}>
                  <div className='footer-widget'>
                    <h4 className='footer-title'>Product</h4>
                    <ul className='footer-menu'>
                      <li>
                        <a href='#'>Manage</a>
                      </li>
                      <li>
                        <a href='#'>Mobile App</a>
                      </li>
                      <li>
                        <a href='#'>FAQ</a>
                      </li>
                      <li>
                        <a href='#'>Contloct</a>
                      </li>
                      <li>
                        <a href='#'>us</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className='footer-widget'>
                    <h4 className='footer-title'>Company</h4>
                    <ul className='footer-menu'>
                      <li>
                        <a href='#'>About Team</a>
                      </li>
                      <li>
                        <a href='#'>Careers</a>
                      </li>
                      <li>
                        <a href='#'>Testimoals</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className='footer-widget'>
                    <h4 className='footer-title'>Company</h4>
                    <ul className='footer-menu'>
                      <li>
                        <a href='#'>About Team</a>
                      </li>
                      <li>
                        <a href='#'>Careers</a>
                      </li>
                      <li>
                        <a href='#'>Testimoals</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className='footer-widget'>
                    <h4 className='footer-title'>Account</h4>
                    <ul className='footer-menu'>
                      <li>
                        <a href='#'>Log In</a>
                      </li>
                      <li>
                        <a href='#'>Terms & Conditions</a>
                      </li>
                      <li>
                        <a href='#'>Pravacy Policy</a>
                      </li>
                      <li>
                        <a href='#'>Security</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row className='align-items-center'>
            <Col lg={6}>
              <p className='copyright'>© 2022 by Esca Technologies Ltd. Company Number: 694871</p>
            </Col>
            <Col lg={6}>
              <ul className="footer-social">
                <li><a href="#"><i className='fab fa-facebook-f'></i></a></li>
                <li><a href="#"><i className='fab fa-twitter'></i></a></li>
                <li><a href="#"><i className='fab fa-linkedin-in'></i></a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      
    </footer>
  )
}

export default Footer
