import React from 'react'
import ViewCards from './cards';
import pet from '../images/pet.jpg';
import '../component/cards.css'
import Hero from './Hero/Hero';
// import './Home.css'
const Home = () => {
  return (
    <>
    <Hero/>
      <section className='service-section'>
        <div className='container'>
          <h1 className='main-heading'>SerVices</h1>
        </div>
      <div className='container grid grid-four-col'></div>
      <div className="card-container">
        <ViewCards 
        title="Online Councultation"
        imageUrl = {pet}
        to='/Doctordetails'
        />
        <ViewCards
        title="QA"
        imageUrl={pet}
        to='/QA'
        />

        <ViewCards
        title="BookAppointment"
        imageUrl={pet}
        to='bookAppointment'
        />
        <ViewCards
        title="Products"
        imageUrl={pet}
        to="http://localhost:3000/"
        /> 
      </div>
    </section>
      
    </>
   
  )
}

export default Home

