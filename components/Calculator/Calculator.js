import { Col, Container, Row } from 'react-bootstrap'

const Calculator = () => {
  return (
    <section className='calculator-section'>
      <div className='calculator-desc'>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={7}>
              <div className='section-title text-center'>
                <h2 className='text-light'>Know your customer and increase profits</h2>
                <p className='text-light'>Cashback, customer profiling, exposure to the digital currency market (APR 230%), and incentivised customer loyalty.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='calculator-widget'>
        <Container>
          <Row>
            <Col>
              <div className="calculator-wrap">
                <iframe
                  src='https://app.calconic.com/api/embed/calculator/6252010825b5a3001f0837f6'
                  sandbox='allow-same-origin allow-forms allow-scripts allow-top-navigation allow-popups-to-escape-sandbox allow-popups'
                  title='Calconic_ Calculator'
                  name='Calconic_ Calculator'
                  height='790px'
                  scrolling='no'
                  style={{ width: '100%' }}
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Calculator
