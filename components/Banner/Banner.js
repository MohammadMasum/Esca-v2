import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import BannerDashboard from './banner-thumb.png'
import BannerShapeLeft from './banner-left-shape.png'
import BannerShapeRight from './banner-right-shape.png'

const Banner = () => {
  return (
    <section className='banner-section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className='banner-text' data-aos='fade-right'>
              <h1>
                We Give <br /> <span>Cash Back</span>
              </h1>
              <p>A decentralised finance system helping food business owners increase profits and customer loyalty</p>
              <div className='banner-btns'>
                <a className='primary-btn' href='#'>
                  Join the wait list
                </a>
                <a className='primary-btn bordered-btn' href='#'>
                  Get a Demo
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='banner-thumb' data-aos='fade-left'>
              <img className='img-fluid' src={BannerDashboard.src} alt='banner-dashboard' />
            </div>
          </Col>
        </Row>
      </Container>
      <img className='banner-left-shape' src={BannerShapeLeft.src} alt='banner-shape' />
      <img className='banner-right-shape' src={BannerShapeRight.src} alt='banner-shape' />
    </section>
  )
}

export default Banner
