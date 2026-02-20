import React from 'react'
import './services.css'
import { BsCheckLg } from "react-icons/bs";
import { SiAngular, SiNestjs, SiMongodb, SiWordpress, SiReact } from "react-icons/si";

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <div className="service__icon">
              <SiAngular />
              <SiNestjs />
            </div>
            <h3>Full-Stack Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>End-to-end web applications using Angular, React, NestJS, Node.js, and MongoDB.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Develop scalable, responsive, and feature-rich applications tailored to your needs.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Specialize in user authentication, data management, and real-time updates.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Custom UI/UX design with interactive components and animations.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Responsive design principles for seamless experience across all devices.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Performance optimization and security best practices.</p> 
            </li>
          </ul>
        </article>
        {/* End of Full-Stack Web Development */}

        <article className='service'>
          <div className="service__head">
            <div className="service__icon">
              <SiWordpress />
            </div>
            <h3>WordPress Development & Customization</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Custom WordPress theme development and plugin creation.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>E-commerce solutions with WooCommerce integration and optimization.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Website migration, maintenance, and performance optimization.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>SEO optimization and content management system setup.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Custom post types, taxonomies, and advanced functionality.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>WordPress security hardening and regular updates.</p>
            </li>
          </ul>
        </article>
        {/* End of WordPress Development */}

        <article className='service'>
          <div className="service__head">
            <div className="service__icon">
              <SiMongodb />
            </div>
            <h3>Backend & Database Solutions</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>RESTful API development with NestJS and Node.js.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Database design and optimization with MongoDB and SQL solutions.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Microservices architecture and scalable backend systems.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Authentication, authorization, and data security implementation.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Real-time features using WebSockets and modern technologies.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Code optimization and performance tuning for production environments.</p> 
            </li>
          </ul>
        </article>
        {/* End of Backend Solutions */}

        <article className='service'>
          <div className="service__head">
            <h3>Consulting & Training</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Technology stack consultation and architecture planning.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Team training sessions on modern frameworks and best practices.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Code review and quality assurance guidance.</p> 
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Migration strategy from legacy systems to modern solutions.</p>
            </li>
          </ul>
        </article>
        {/* End of Consulting & Training */}

      </div>
    </section>
  )
}

export default services