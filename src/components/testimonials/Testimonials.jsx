import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//import swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, adipisci architecto! Ad quas minima dignissimos dicta nisi praesentium, accusantium a!'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'John Jameson',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, adipisci architecto! Ad quas minima dignissimos dicta nisi praesentium, accusantium a!'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Mark Benhan',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, adipisci architecto! Ad quas minima dignissimos dicta nisi praesentium, accusantium a!'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Nadeen Manshe',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, adipisci architecto! Ad quas minima dignissimos dicta nisi praesentium, accusantium a!'
  },
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index)=> {
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar Image" />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials