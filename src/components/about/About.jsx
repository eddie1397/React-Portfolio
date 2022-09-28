import React from "react";
import './about.css'
import ME from '../../assets/me5.jpg'
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
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>

        {/* BOX 1 */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
        
        {/* BOX 2 */}
          <div className="about__content">
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Clients</h5>
                <small>12+ Clients Worldwide</small>
              </article>
          </div>

          {/* BOX 3 */}
          <div className="about__content">
              <article className="about__card">
                <VscFolderLibrary className="about__icon"/>
                <h5>Projects </h5>
                <small>6 Projects Completed</small>
              </article>
            </div>
          {/* BOX 4 */}
            {/* <div className="about__content">
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Example</h5>
                <small>Can Be Easily Removed!</small>
              </article>
          </div> */}
          {/* BOX 5 */}
          {/* <div className="about__content">
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Example</h5>
                <small>Can Be Easily Removed!</small>
              </article>
          </div> */}
          {/* BOX 6 */}
          {/* <div className="about__content">
              <article className="about__card">
                <FiUsers className="about__icon"/>
                <h5>Example</h5>
                <small>Can Be Easily Removed!</small>
              </article>
          </div> */}
        </div>
          <p>
          Ever since I was a young kid I have always had an interest in computers. Videogames piqued my interest like most boys my age but it wasn't till I found out about programming is where that fun really started.
          </p>
          <p>
          The passion of being able to create and innovate anything drove me toward computer science as a kid. This same passion brought me back to the life of a software engineer as college student.
          </p>
          <p>
          In my spare time, I run my own production company that specializes in photography and videography work as well as making music. I have been taking pictures for about 9 years now and I really enjoy being able to tell others stories through artistic expression. Becasue of this I can use the adobe suite with ease. I also have an extensive knowledge in marketing and graphic design. While I do have a plethora of skills I understand that there is always something more to learn. That is why I have committed myself to a life of learning.
          </p>
          <a href="#contact" className="btn btn-primary btn-aboutme">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about