import React from 'react'
import './Hero.css'
import doctorlogo from '../Assests/doctorLogo.png'
import logo from '../Assests/logo.avif'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>Hi there</h2>
            <div>
            <   div className='hand-hand-icon'>
                    <p>TALK TO EXPERT</p>
                    <img  className='hand'src={logo} alt=''/>
                </div>
                <p>Expert Consultation</p>
                <p>for your pet</p>
            </div>
            <div className='hero-latest-btn'>
                <h6>Take care of your pet health as its more loyal than humans</h6>
                {/* <div>Latest Collection</div> */}
                {/* <img className='womenok' src={womenok}alt=''/> */}
            </div>
        </div> 
        <div className='hero-right'>
        <img className='womenok' src={doctorlogo}alt=''/>  
        </div>

    </div>
  )
}

export default Hero