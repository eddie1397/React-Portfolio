import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FLIX - A Movie Lovers App',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Roseus - A Wine Lovers App',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Guess My Number - A Guessing Game',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  }
]


function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Project 1 Image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio