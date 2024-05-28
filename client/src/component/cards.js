import React from 'react'
import '../component/cards.css'
import { Link } from 'react-router-dom';



const ViewCards=({ title, description, imageUrl,to})=> {
  return (
    <div className="view-card" >
       <Link to={to}>
        <img src={imageUrl} alt={title} className='img' />
      </Link>
      <div className="view-card-info">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ViewCards
// onClick={'/DoctorDetails'}