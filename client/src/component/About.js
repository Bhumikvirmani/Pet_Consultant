import React from 'react'
import pet from '../images/pet.jpg';

const About = () => {
  return (
    <>
      <div className='container emp-profile'>
        <form method=''>
          <div className='row'>
            <div className='col-md-4'>
              <img src={pet} alt='none'/>
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>bhumik virmani</h5>
                <h6>web development </h6>
              </div>
            </div>
          </div>
        </form> 
      </div>
    </>
  )
}

export default About