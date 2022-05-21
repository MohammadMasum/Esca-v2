import { Col, Container, Row } from 'react-bootstrap'
import LadyPng from './lady.png'

const Contact = () => {
  return (
    <section className='contact-us'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className="contact-thumb">
              <img src={LadyPng.src} alt='' />
            </div>
          </Col>
          <Col lg={6}>
            <div className='contact-form'>
              <div className="section-title">
                <h2>Contact Us</h2>
              </div>
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor=''>First Name*</label>
                    <input className='form-control' type='text' placeholder='Enter your first name' />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor=''>Last Name*</label>
                    <input className='form-control' type='text' placeholder='Enter your last name' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor=''>Email address*</label>
                    <input className='form-control' type='text' placeholder='Enter email address' />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    <label htmlFor=''>Phone*</label>
                    <input className='form-control' type='text' placeholder='Enter Phone number' />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="form-group">
                    <label htmlFor=''>Message*</label>
                    <textarea className='form-control' placeholder='Message'></textarea>
                  </div>
                  <div className="submit-wrap">
                    <input className='primary-btn' type='submit' value='Get In Touch' />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
