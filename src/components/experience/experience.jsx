import React from 'react'
import './experience.css'
import { BiSolidBadgeCheck } from "react-icons/bi";

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small> 
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small> 
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div> 
            </article>
          </div>
        </div>
        {/* End of Frotend */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Nest Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small> 
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small> 
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small> 
              </div>
            </article>
            {/* <article className="experience__details">
              <BiSolidBadgeCheck />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article> */}
          </div>
        </div>
        {/* End of Backend */}
      </div>
    </section>
  )
}

export default experience