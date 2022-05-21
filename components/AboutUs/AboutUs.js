import { Col, Container, Row } from 'react-bootstrap'
import AboutThumb from './about-thumb.png'
import AboutShape from './about-shape.png'
import ZoomIcon from './zoom.png'

const AboutUs = () => {
  return (
    <section className='about-section' id='about'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className='about-thumb'>
              <img className='img-fluid' src={AboutThumb.src} alt='' />
            </div>
          </Col>
          <Col lg={6}>
            <div className='about-content' data-aos='fade-up'>
              <h2>
                Giving your business the one thing it needs the most.. <span>Money</span>
              </h2>
              <p>Esca for business gives you and your customers access to real cash visible on your balance sheet.</p>
              <p>Feed, get fed, and get paid! Fight the inflation monster, make more sales, and build more customer loyalty.</p>
              <a href='#' className='primary-btn'>
                Learn More
              </a>
              <img className='about-shape' src={AboutShape.src} alt='' />
            </div>
          </Col>
        </Row>
      </Container>

      <div className='callendly-section'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={8}>
              <div className='callendly-widget'>
                <img src={ZoomIcon.src} alt='' /> <a href='https://calendly.com/masudahsan21/project-discussion?month=2022-05'>https://calendly.com/masudahsan21/project-discussion?month=2022-05</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default AboutUs
