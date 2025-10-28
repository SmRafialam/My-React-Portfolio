import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image1.jpg'
import IMG2 from '../../assets/image2.jpg'
import IMG3 from '../../assets/image3.JPG'
import IMG4 from '../../assets/ss2.png'
import IMG5 from '../../assets/aerodrops.png'
import IMG6 from '../../assets/aero.png'
import IMG7 from '../../assets/managerium.png'
import IMG8 from '../../assets/ibos.io.png'
import IMG9 from '../../assets/RB.png'

const data = [
  {
      id: 1,
      image: IMG1,
      title: 'PIM front',
      github:	'https://github.com/SmRafialam',
      demo: 'https://pim-frontend.azurewebsites.net/'
  },
  {
      id: 2,
      image: IMG2,
      title: 'PIM Backend',
      github:	'https://github.com/SmRafialam',
      demo: 'https://pim-nest.vercel.app/api/doc/v1#/'
  },
  {
      id: 3,
      image: IMG3,
      title: 'E-Commerce with Laravel',
      github:	'https://github.com/SmRafialam/E-Commerce-Project-with-Php-Laravel',
      demo: 'https://dribble.com'
  },
  {
      id: 4,
      image: IMG4,
      title: 'Pruvit',
      github:	'https://www.pruvit.com/',
      demo: 'https://www.pruvit.com/'
  },
  {
      id: 5,
      image: IMG5,
      title: 'Aero Drop',
      github:	'https://github.com',
      demo: 'https://aerodrop.ai/'
  },
  {
      id: 6,
      image: IMG6,
      title: 'Aero Apps',
      github:	'https://github.com',
      demo: 'https://aeroapps.io/'
  },
  {
      id: 7,
      image: IMG7,
      title: 'Managerium',
      github:	'https://github.com',
      demo: 'https://ibos.io/managerium/'
  },
  {
      id: 8,
      image: IMG8,
      title: 'Akij iBos',
      github:	'https://github.com',
      demo: 'https://ibos.io/'
  },
  {
      id: 8,
      image: IMG9,
      title: 'Ruposhi Bangla',
      github:	'https://github.com',
      demo: 'https://ruposhibangla.store/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=> {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default portfolio