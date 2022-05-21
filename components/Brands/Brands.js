import { Col, Container, Row } from 'react-bootstrap'
import IconOne from './images/1.png'
import IconTwo from './images/2.png'
import IconThree from './images/3.png'
import IconFour from './images/4.png'
import IconFive from './images/5.png'
import IconSix from './images/6.png'

const Brands = () => {
  return (
    <section className='brand-section'>
      <Container>
        <Row>
          <Col>
            <div className='section-title text-center'>
              <h2>In the press</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className='brands'>
              <div className='brand'>
                <img src={IconSix.src} alt='' />
              </div>
              <div className='brand'>
                <img src={IconFive.src} alt='' />
              </div>
              <div className='brand'>
                <img src={IconOne.src} alt='' />
              </div>
              <div className='brand'>
                <img src={IconFour.src} alt='' />
              </div>
              <div className='brand'>
                <img src={IconThree.src} alt='' />
              </div>
              <div className='brand'>
                <img src={IconTwo.src} alt='' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Brands
