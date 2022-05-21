import { Col, Container, Row } from 'react-bootstrap'
import ImgOne from './images/1.png'
import ImgTwo from './images/2.png'
import ImgThree from './images/3.png'

const Revenue = () => {
  return (
    <section className='revenue-section'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6}>
            <div className='section-title text-center'>
              <h2>
                Increase revenue and <br /> fight inflation
              </h2>
            </div>
          </Col>
        </Row>
        <Row className='gy-4'>
          <Col lg={4} md={6} sm={12}>
            <div className='revenue-item pink-bg text-center'>
              <div className='revenue-img'>
                <img src={ImgOne.src} alt='' />
              </div>
              <h4>Cashback</h4>
              <p>Increase your profits and provide your customers with passive income through crypto cashback.</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='revenue-item yellow-bg text-center'>
              <div className='revenue-img'>
                <img src={ImgTwo.src} alt='' />
              </div>
              <h4>Analytics</h4>
              <p>In-depth customer insights to help you understand your customers and your business better</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='revenue-item blue-bg text-center'>
              <div className='revenue-img'>
                <img src={ImgThree.src} alt='' />
              </div>
              <h4>Table Service</h4>
              <p>A custom URL and QR code allowing you to use Esca as a digital menu inside your restaurant. No marketplace? No problem!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Revenue
