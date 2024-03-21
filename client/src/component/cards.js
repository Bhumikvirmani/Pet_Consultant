import React from 'react'
import '../component/cards.css'

const ViewCards=({ title, description, imageUrl })=> {
  return (
    <div className="view-card">
      <img src={imageUrl} alt={title} className='img' />
      <div className="view-card-info">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ViewCards

// import React from 'react';

// const ViewCard = ({ title, description, imageUrl }) => {
//   return (
//     <div className="view-card">
//       <img src={imageUrl} alt={title} />
//       <div className="view-card-info">
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ViewCard;