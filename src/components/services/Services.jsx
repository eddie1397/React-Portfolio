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
          </div>
            <ul className='service__list'>
            <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Design Analysis</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Website Application Design</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Mobile Application Design</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Logo Design</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Sketching and Wireframes</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Dynamic Prototype</p>
              </li>

            </ul>
        </article>
       {/* END OF UI/UX */}

       <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

            <ul className='service__list'>
              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Analytics Interpretation and Reporting </p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Competition Monitoring</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Pay-Per-Click Campaign Managment</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Usability Testing</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Ongoing Website Maintenance</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Search Engine Optimization (SEO)</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Email Marketing</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Website Analytics</p>
              </li>

              



            </ul>
        </article>
       {/* END OF WEB DEVELOPMENT */}

       <article className='service'>
          <div className='service__head'>
            <h3>Photography</h3>
          </div>
            <ul className='service__list'>
              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Headshot Photography</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Portrait Photography</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p> Product/Commercial Photography </p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Travel Photography and Videography </p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Complete Videoa and Photo Editing Services</p>
              </li>

              <li>
                <AiOutlineCheckCircle className='service__list-icon' />
                <p>Landscape/ Drone Photography and Videography</p>
              </li>

            </ul>
        </article>
       {/* END OF PHOTOGRAPHY */}
      </div>
    </section>
  )
}

export default Services