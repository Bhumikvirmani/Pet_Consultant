import React from 'react'
import ViewCards from './cards';
import pet from '../images/pet.jpg';
import '../component/cards.css'
const Home = () => {
  return (
    <>
      <section className='service-section'>
        <div className='container'>
          <h1 className='main-heading'>SerVices</h1>
        </div>
      <div className='container grid grid-four-col'></div>
      <div className="card-container">
        <ViewCards
        title="Example Card 1"
        description="This is an example card."
        imageUrl= {pet}
        />
        <ViewCards
        title="Example Card 2"
        description="This is another example card."
        imageUrl={pet}
        />

        <ViewCards
        title="Example Card 2"
        description="This is another example card."
        imageUrl={pet}
        />

        <ViewCards
        title="Example Card 2"
        description="This is another example card."
        imageUrl={pet}
        />

        <ViewCards
        title="Example Card 2"
        description="This is another example card."
        imageUrl={pet}
        />
      </div>
    </section>
      
    </>
   
  )
}

export default Home
// import React from 'react';
// import ViewCard from './ViewCard'; // Assuming the ViewCard component is in the same directory

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <h1>Welcome to My Home Page</h1>
//       <ViewCard
//         title="Example Card 1"
//         description="This is an example card."
//         imageUrl="https://example.com/image1.jpg"
//       />
//       <ViewCard
//         title="Example Card 2"
//         description="This is another example card."
//         imageUrl="https://example.com/image2.jpg"
//       />
//     </div>
//   );
// };

// export default HomePage;
// import React from 'react'
// // import styled  from 'styled-components'
// import pet from '../images/pet.jpg'
// export default function Home() {
//   return (
//     <Section id="Home">
//       <div className="background">
//         <img src={pet} alt="" />
//       </div>
//       <div className="content">
//         <div className="title">
//           <h1>TRAVEL TO EXPLORE</h1>
//           <p>
//             ENJOY THE VACATION SEE THE WORLD
//           </p>
//         </div>
//         <div className="search">
//           <div className="container">
//             <label htmlFor="">Where you want to go</label>
//             <input type="text" placeholder="Search Your location" />
//           </div>
//           <div className="container">
//             <label htmlFor="">Check-in</label>
//             <input type="date" />
//           </div>
//           <div className="container">
//             <label htmlFor="">Check-out</label>
//             <input type="date" />
//           </div>
//           <button>Explore Now</button>
//         </div>
//       </div>
//     </Section>
//   )
// }

// const Section=styled.section`
//     posistion:relative;
//     margin-top:2rem;
//     width:100%;
//     height:100%;
//     .background{
//       height:60%;
//       img{
//         width:100%;
//         height:60%;
//         filter:brightness(60%);
//       }
//     }
//     .content{
//       height:100%;
//       width:100%;
//       position:absolute;
//       top:0;  
//       z-index:3;
//       text-align:center;
//       display:flex;
//       flex-direction:column;
//       justify-content:center;S
//       align-item:center;
//       gap:1rem;
//       .title{
//         color:yellow;
//         h1{
//           font-size:3rem;
//           letter-spacing:0.2rem;
//         }
//         p{
//           text-align:center;
//           padding:0 30vw;
//           margin-top:0.5rem;
//           font-size:1.2rem;
//         }
//       }
//       .search{
//         display:flex;
//         background-color:white;
//         padding:0.5rem;
//         border-radius:0.5rem;
//         .container{
//           display:flex;
//           align-item:center;
//           justify-content:center;
//           flex-direction:column;
//           padding:0 1.5rem;
//           label{
//             font-size:1.1rem;
//             color:black;
//           }
//           input{
//             background-color:transparent;
//             border:none;
//             text-align:center;
//             color:black;
//             &[type='date']{
//               padding-left:3rem;
//             }
//             &::placeholder{
//               color:black;
//             }
//             &:focus{
//               outline:none;
//             }
//           }
//         }
//       }
//       button{
//         padding:1rem;
//         cursor:pointer;
//         border-radius:0.3rem;
//         border:none;
//         color:white:
//         background-color:tranparent;
//         font-size:1.1rem;
//         text-transform:uppercase;
//         transition:0.3s ease-in-out;
//         &:hover{
//           background-color:blue;
//         }
//       } 
//     }
//   }
//   }
// `;
