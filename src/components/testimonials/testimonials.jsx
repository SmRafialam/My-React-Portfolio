import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Sarah Mitchell',
    title: 'Product Manager, TechFlow Solutions',
    review: "Working with Rafi was exceptional. He delivered a full-stack application in 4 months that increased our user engagement by 45%. His attention to detail and proactive problem-solving saved us thousands in development costs."
  },
  {
    avatar: AVTR2,
    name: 'Emily Rodriguez',
    title: 'CEO, Creative Digital Agency',
    review: "Rafi transformed our WordPress website into a high-performance e-commerce platform. The implementation was smooth, the communication was clear, and the results exceeded our ROI projections. Highly recommended!"
  },
  {
    avatar: AVTR3,
    name: 'Jessica Chen',
    title: 'Operations Director, StartupHub',
    review: "We needed a custom backend API quickly. Rafi delivered a scalable NestJS solution within budget and timeline. His code is clean, well-documented, and production-ready. Outstanding work!"
  },
  {
    avatar: AVTR4,
    name: 'Amanda Foster',
    title: 'Marketing Lead, E-Commerce Co.',
    review: "The React application Rafi built for us has been a game-changer. Fast load times, intuitive UI, and seamless checkout process resulted in 35% increase in conversions. He's a developer you can trust completely."
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, title, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__title'>{title}</small>
                <small className='client__review'>
                  "{review}"
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials