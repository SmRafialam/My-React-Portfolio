import React from 'react'
import './footer.css'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>S. M. Rafi Alam</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/innocent.rafi.5/"><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/s-m-rafi-898bb3160/"><FaLinkedin/></a>
        <a href="https://github.com/SmRafialam"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SmRafiAlam. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer