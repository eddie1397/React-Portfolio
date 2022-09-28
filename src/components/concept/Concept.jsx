import React from 'react'
import './concept.css'
import IMG1 from '../../assets/concepts/concept1.jpg'
import IMG2 from '../../assets/concepts/concept2.jpg'
import IMG3 from '../../assets/portfolio/portfolio3.jpg'
import IMG4 from '../../assets/portfolio/portfolio4.jpg'
// THIS IMG IS A PNG
import IMG5 from '../../assets/portfolio/portfolio5.png'
import IMG6 from '../../assets/portfolio/portfolio6.jpg'

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Burr - A Weather App',
    github: 'https://github.com',
    link: 'https://www.figma.com/file/Zp2HFBTq7VEE2DfxzqwEFh/Diagram---burrr?node-id=0%3A1'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Flix - A Movie App',
    github: 'https://github.com',
    link: 'https://www.figma.com/file/eH7DsomwpDrqyHDmdXgmw5/FLIX?node-id=0%3A1'
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: 'Concept 3',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: 'Concept 4',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Concept 5',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Concept 6',
  //   github: 'https://github.com',
  //   demo: 'https://dribble.com'
  // }
]

function Concept() {
  return (
    <section id="concept">
      <h5>My Recent Work</h5>
      <h2>Concepts and Designs</h2>

      <div className="container concept__container">
        {
          data.map(({id, image, title, link}) => {
            return (
              <article key={id} className='concept__item'>
                <div className="concept__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='concept__item-cta'>
                  <a href={link} className='btn btn-primary' target='_blank'>View Concept Live</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Concept