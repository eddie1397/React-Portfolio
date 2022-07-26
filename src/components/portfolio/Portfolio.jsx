import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/portfolio1.jpg'
import IMG2 from '../../assets/portfolio/portfolio2.jpg'
import IMG3 from '../../assets/portfolio/portfolio3.jpg'
import IMG4 from '../../assets/portfolio/portfolio4.jpg'
// THIS IMG IS A PNG
import IMG5 from '../../assets/portfolio/portfolio5.png'
import IMG6 from '../../assets/portfolio/portfolio6.jpg'
import IMG7 from '../../assets/portfolio/portfolio7.jpg'
import IMG8 from '../../assets/portfolio/portfolio8.jpg'
import IMG9 from '../../assets/portfolio/portfolio9.jpg'


const data = [
  // {
  //   id: 1,
  //   image: IMG1,
  //   title: 'Flix - A Movie Lovers App',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: 'Roseus - A Wine Lovers App',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // },
  {
    id: 3,
    image: IMG3,
    title: 'Guess My Number - A Guessing Game',
    github: 'https://github.com/eddie1397/Guess-my-number',
    demo: 'https://guessmynumber13.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'PIG - A Betting Game',
    github: 'https://github.com/eddie1397/PIG-',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Tesla - A Website Clone',
    github: 'https://github.com/eddie1397/Tesla',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Reis - A Travel Diary',
    github: 'https://github.com/eddie1397/REIS-FRONT',
    demo: 'https://reis-frontend.herokuapp.com/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Edfud Inc. - Personal Website',
    github: 'https://github.com/eddie1397/React-Portfolio',
    demo: 'https://dribble.com'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Chew - A Food App',
    github: 'https://github.com/DMaz009/chew-frontEnd',
    demo: 'https://chew-frontend.herokuapp.com/'
  },
  // {
  //   id: 9,
  //   image: IMG9,
  //   title: 'Flix - A Movie App',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // }
  //COMING SOON 
  // {
  //   id: 10,
  //   image: IMG10,
  //   title: 'Burr - A Weather App',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // }
]


function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}




// <article className='portfolio__item'>
//           <div className="portfolio__item-image">
//             <img src={IMG1} alt="Project 1 Image" />
//           </div>
//           <h3>This is a portfolio item title</h3>
//           <div className='portfolio__item-cta'>
//             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
//             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
export default Portfolio