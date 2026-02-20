import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image1.jpg'
import IMG2 from '../../assets/image2.jpg'
import IMG3 from '../../assets/image3.JPG'
import IMG4 from '../../assets/ss2.png'
import IMG5 from '../../assets/aerodrops.png'
import IMG6 from '../../assets/aero.png'
import IMG7 from '../../assets/managerium.png'
import iBos from '../../assets/iBos.jpg'
import IMG9 from '../../assets/RB.png'
import orca from '../../assets/orca.png'
import carnival from '../../assets/carnival.png'
import fariasAgro from '../../assets/fariasAgro.jpg'
import IMG301 from '../../assets/img301.png'
import chanceCasino from '../../assets/chancecasino.jpg'
import brainforward from '../../assets/brainforward2.jpg'
import trackforce from '../../assets/trackforce.jpg'
import news from '../../assets/news.jpg'

const data = [
  {
      id: 1,
      image: IMG1,
      title: 'PIM with Angular',
      github:	'https://github.com/SmRafialam',
      demo: 'https://pim-frontend.azurewebsites.net/'
  },
  {
      id: 2,
      image: IMG2,
      title: 'PIM with NestJs',
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
      id: 3,
      image: IMG301,
      title: 'AIMS with Angular',
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
      github:	'https://github.com/SmRafialam',
      demo: 'https://aerodrop.ai/'
  },
  {
      id: 6,
      image: IMG6,
      title: 'Aero Apps',
      github:	'https://github.com/SmRafialam',
      demo: 'https://aeroapps.io/'
  },
  {
      id: 7,
      image: IMG7,
      title: 'Managerium',
      github:	'https://github.com/SmRafialam',
      demo: 'https://ibos.io/managerium/'
  },
  {
      id: 8,
      image: iBos,
      title: 'Akij iBos',
      github:	'https://github.com/SmRafialam',
      demo: 'https://ibos.io/'
  },
  {
      id: 9,
      image: IMG9,
      title: 'Ruposhi Bangla',
      github:	'https://github.com/SmRafialam',
      demo: 'https://ruposhibangla.store/'
  },
  {
      id: 10,
      image: orca,
      title: 'Akij Consumer Electronics',
      github:	'https://github.com/SmRafialam',
      demo: 'https://akijce.com/'
  },
  {
      id: 11,
      image: carnival,
      title: 'Carnival Casino & BINGO',
      github:	'https://github.com/SmRafialam',
      demo: 'https://carnivalcasino.bingo/'
  },
  {
      id: 12,
      image: brainforward,
      title: 'Brain Forward',
      github:	'https://github.com/SmRafialam',
      demo: 'https://brainforward.com.bd/'
  },
  {
      id: 12,
      image: chanceCasino,
      title: 'Chance Casino',
      github:	'https://github.com/SmRafialam',
      demo: 'https://chancegames.fun/'
  },
  {
      id: 12,
      image: fariasAgro,
      title: 'Farias Agro',
      github:	'https://github.com/SmRafialam',
      demo: 'https://fariasagro.com/'
  },
  {
      id: 12,
      image: trackforce,
      title: 'TrackForce',
      github:	'https://github.com/SmRafialam',
      demo: 'https://trackforce.io/'
  },
  {
      id: 12,
      image: news,
      title: 'TAMPA BUZZ',
      github:	'https://github.com/SmRafialam',
      demo: 'https://tampabuzz360.com/'
  },

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