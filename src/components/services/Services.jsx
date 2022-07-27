import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'


function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>

            <ul className='service__list'>
              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
       {/* END OF UI/UX */}

       <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>

            <ul className='service__list'>
              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
       {/* END OF WEB DEVELOPMENT */}

       <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>

            <ul className='service__list'>
              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Lorem, ipsum dolor sit amet adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </article>
       {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services