import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small class='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small class='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Javascript</h4>
              <small class='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Material Design</h4>
              <small class='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Bootstrap</h4>
              <small class='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Tailwind</h4>
              <small class='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small class='text-light'>Experienced</small>
            </article>
          </div>
        </div>


      {/* END OF FRONT END */}
        
        
        <div className="experience-backend">
          <h3>Backend Development</h3>
            <div className="experience-content">
              <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Node.js</h4>
                <small class='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>MongoDB</h4>
                <small class='text-light'>Intermediate</small>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Node.js</h4>
                <small class='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>Python</h4>
                <small class='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>PHP</h4>
                <small class='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>SQL</h4>
                <small class='text-light'>Experienced</small>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill />
                <h4>React</h4>
                <small class='text-light'>Experienced</small>
              </article>
            </div>
          </div>
      </div>
    </section>
  )
}
 
export default Experience