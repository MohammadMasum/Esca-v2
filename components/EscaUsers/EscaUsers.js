import { Col, Container, Row } from 'react-bootstrap'
import ImgOne from './images/1.png'
import ImgTwo from './images/2.png'
import ImgThree from './images/3.png'

const EscaUsers = () => {
  return (
    <section className='esca-users'>
      <Container>
        <Row>
          <Col>
            <div className='section-title'>
              <h2>Who can use Esca?</h2>
            </div>
          </Col>
        </Row>

        <Row className='gy-4'>
          <Col lg={4} md={6}>
            <div className='esca-card first-card'>
              <img src={ImgOne.src} alt='' />
              <h3>Restaurants</h3>
              <p>An online food ordering platform providing you with cashback and data on your customers eating habits.</p>
              <a className='primary-btn' href=''>Book a Demo</a>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className='esca-card second-card'>
              <img src={ImgTwo.src} alt='' />
              <h3>POS Companies</h3>
              <p>Direct integration with our dApp to offer your customers cashback trackable directly in their POS</p>
              <a className='primary-btn' href=''>Book a Demo</a>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className='esca-card third-card'>
              <img src={ImgThree.src} alt='' />
              <h3>Online Ordering Platforms</h3>
              <p>API enabling you to reward your users with cashback and other financing options</p>
              <a className='primary-btn' href=''>Book a Demo</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EscaUsers
