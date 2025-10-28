import React from 'react'
import './about.css'
import ME from '../../assets/Meee.png'
import { TbAwardFilled } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaResearchgate } from "react-icons/fa6";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAwardFilled className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article> 

            {/* <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>  */}
            {/* https://www.researchgate.net/profile/Rafi-Alam-4 */}

            <a className="about__card" href='https://github.com/SmRafialam'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </a> 

            <a className="about__card" href='https://orcid.org/0000-0003-4805-5492'>
              <FaResearchgate className='about__icon'/>
              <h5>Research Paper</h5>
              <small>1</small>
            </a>
          </div>

          <p>
            I’m looking to collaborate on Communicate openly, Open communication with team members and senior leaders has a profound impact on breaking down information silos between developers and operations teams, Select the right tools. ... Write comprehensive documentation. ... Provide fast feedback,Lead effectively.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About