import React from "react";
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Me Image" />
        </div>
        {/* BOX 1 */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>
          </div>
        </div>
        {/* BOX 2 */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ Clients Worldwide</small>
            </article>
          </div>
        </div>
        {/* BOX 3 */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects </h5>
              <small>80+ Projects Completed</small>
            </article>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo praesentium consequatur ad facere, adipisci placeat. Voluptatum, esse magnam beatae vero ut natus ipsum voluptatem, consequatur ad eveniet fugiat aliquam.
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </section>
  )
}

export default about