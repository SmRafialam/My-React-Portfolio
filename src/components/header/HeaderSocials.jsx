import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
// import { IoLogoDribbble } from "react-icons/io";
import { FaOrcid } from "react-icons/fa";

import "./Header.css";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/s-m-rafi-898bb3160/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/SmRafialam" target='_blank'><FaGithub /></a>
        {/* <a href="https://dribble.com" target='_blank'><IoLogoDribbble /></a> */}
        <a href="https://orcid.org/0000-0003-4805-5492" target='_blank'><FaOrcid /></a>
    </div>
  )
}

export default HeaderSocials