import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'

// images
import ImgOne from './images/1.png'
import ImgTwo from './images/2.png'
import ImgThree from './images/3.png'
import ImgFour from './images/4.png'
import ImgFive from './images/5.png'
import ImgSix from './images/6.png'

const Customers = () => {
  return (
    <section className='customer-section'>
      <Container>
        <Row>
          <Col>
            <div className='section-title text-center'>
              <h2>Some of our customers</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Swiper 
              modules={[Navigation]} 
              navigation spaceBetween={50} 
              slidesPerView={6} 
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1365: {
                  slidesPerView: 6,
                },
              }}>
              <SwiperSlide>
                <img src={ImgOne.src} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgTwo.src} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgThree.src} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgFour.src} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgFive.src} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgSix.src} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgOne.src} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImgTwo.src} alt='' />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Customers
