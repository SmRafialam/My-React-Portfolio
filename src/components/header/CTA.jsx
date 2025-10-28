import React from 'react'
import CV from '../../assets/Rafi_Alam_CV.pdf'
import "./Header.css";

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CTA