// import React, { useState } from 'react'
// import pet from '../images/pet.jpg';

// const Signup=()=>{
//   const[user,setUser]= useState({
//     username:"",
//     mobile:"",
//     email:"",
//     password:"",
//   });

//   const handleInput=(e)=>{
//     console.log(e);
//     let name= e.target.name;
//     let value = e.target.value

//     setUser({
//       ...user,
//       [name]: value,
//     })
//   }

//   const handleSubmit=(e)=>{
//     e.
//   }
//   return (
//     <>
//       <section>
//         <main>
//           <div className='section-registration'>
//             <div className='container grid grid-two-cols'>
//               <div className='registration-img'>
//                 <img src={pet} alt='none' 
//                   max-width="500px"
//                   height="500px"
//                 />
//               </div>
//               {/* let do registration */}

//               <div className='registration-form'>
//                 <h1 className='main-heading mb-3'>registration form</h1>
//                 <br/>
//                 <form onSubmit={handleSubmit}>
//                   <label htmlFor='username'>username</label>
//                   <input
//                     type='text'
//                     name='username'
//                     placeholder='username'
//                     id='username'
//                     required
//                     autoCapitalize='off'
//                     value={user.username}
//                     onChange={handleInput}
//                   />
//                   <label htmlFor='mobile'>mobile</label>
//                   <input
//                     type='number'
//                     name='mobile'
//                     placeholder='mobile'
//                     id='mobile'
//                     required
//                     autoCapitalize='off'
//                     value={user.mobile}
//                     onChange={handleInput}
//                   />
//                   <label htmlFor='email'>email</label>
//                   <input
//                     type='text'
//                     name='email'
//                     placeholder='email'
//                     id='email'
//                     required
//                     autoCapitalize='off'
//                     value={user.email}
//                     onChange={handleInput}
//                   />
//                   <label htmlFor='password'> password</label>
//                   <input
//                     type='password'
//                     name='password'
//                     placeholder='password'
//                     id='password'
//                     required
//                     autoCapitalize='off'
//                     value={user.password}
//                     onChange={handleInput}
//                   />
//                   <br/>
//                   <button type='submit' className='btn btn-submit'>Registration Now</button>

//                 </form>

//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   )
// }

// export default Signup

import React, {useState}from 'react'
import pet from '../images/pet.jpg';
import './styled_components/Signup.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
  const [user, setUser]= useState({
    name:"", mobile:"", address:"", email:"", password:"", cpassword:""
  });
  
  let name,value;
  const handleInputs = (e)=>{

    console.log("handleInputs : ",e);
    name= e.target.name;
    value = e.target.value;
    console.log("handleInputs name and values: "+name + " " +value);

    setUser({...user,[name]:value});
    console.log("handleInputs userdata : ",user);
  }
 
  const PostData = async(e)=>{
    e.preventDefault();

    const {name, mobile, address, email, password, cpassword}=user;
    console.log("postdata: "+name+" "+mobile)
    const res = await fetch('/details/details',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, mobile, address, email, password, cpassword
      })
    });

    const data = await res.json();
    console.log("DATA: ",data)
    if(data.status=== 422 || !data){
      window.alert("Invalid registration...");
      console.log("Invalid registration...")
    }else{
      window.alert("Registration done");
      console.log("Registration done");

      history.push("/login");
    }


  }
  return (
    <>
        <section className='Signup'>
         
            <div className='Signup'>
              <div className='Signup-contact'>
                  <div className='signup-form'>
                  <h2 className='form-title'>Sign up</h2>
                  <form method='POST' className='registered-form' id='registered-form'>

                    <div className='form-group'>
                      <label htmlFor='name'>
                        <i className="zmdi zmdi-account material-icons-name"></i>
                      </label>
                      <input type="text" id="name" name="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder="Enter your name" />

                    </div>

                    <div className='form-group'>
                      <label htmlFor='mobile'>
                        <i className="zmdi zmdi-account material-icons-mobile"></i>
                      </label>
                      <input type="number" id="mobile" name="mobile" autoComplete='off' value={user.mobile} onChange={handleInputs} placeholder="Enter your mobile no" />

                    </div>

                    <div className='form-group'>
                      <label htmlFor='address'>
                        <i className="zmdi zmdi-account material-icons'address"></i>
                      </label>
                      <input type="text" id="address"name="address" autoComplete='off' value={user.address} onChange={handleInputs} placeholder="Enter your'address" />

                    </div>

                    <div className='form-group'>
                      <label htmlFor='email'>
                      </label>
                      <input type="text" id="email" name="email" autoComplete='off' value={user.email} onChange={handleInputs} placeholder="Enter your email" />

                    </div>

                    <div className='form-group'>
                      <label htmlFor='password'>
                      </label>
                      <input type="password" id="password" name="password" autoComplete='off' value={user.password} onChange={handleInputs} placeholder="Enter your password" />

                    </div>

                    <div className='form-group'>
                      <label htmlFor='cpassword'>
                      </label>
                      <input type="password" id="cpassword" name="cpassword" autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder="Enter your cpassword" />

                    </div>

                    <div className='form-button'>
                      <input type='button' name='signup' id='signup' className='form-submit'
                        value="signup" onClick={PostData}/> 

                    </div>

                  </form>
                  </div>
                  <div className='signup-image'>
                    <figure>
                    <img className='imagcenter' src={pet} alt='pet'/>
                    </figure>
                    <NavLink to="/Login" className='logo'>I am already Login</NavLink>
                  </div>
                </div>
              </div>
        </section>
    </>
  )
}

export default Signup
// Signup.js

// import React, { useState } from 'react';
// // import './Signup.css';
// import pet from '../images/pet.jpg';
// import { NavLink, useNavigate } from 'react-router-dom';
// const Signup = () => {
//   const history = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log(formData); // or submit data to backend
//     const res = await fetch("http://localhost:2000/details",{
//           method:"POST",
//           headers:{
//             "Content-Type":"application/json"
//           },
//           body:JSON.stringify({
//             username, email, password
//           })
//         });
//         const data = await res.json();
//             console.log("DATA: ",data)
//             if(data.status=== 422 || !data){
//               window.alert("Invalid registration...");
//               console.log("Invalid registration...")
//             }else{
//               window.alert("Registration done");
//               console.log("Registration done");
        
//               history.push("/login");
//   };
//   return (
//     <div className="signup-form">
//       <h2>Sign Up</h2>
//       <form  method="POST" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up value="signup" onClick={handleSubmit}/</button>
//         {/* <div className='form-button'>
// //                       <input type='button' name='signup' id='signup' className='form-submit'
// //                         value="signup" onClick={PostData}/>  */}
//       </form>
//       <div>
//       <div className='signup-image'>
//                     <figure>
//                     <img className='imagcenter' src={pet} alt='pet'/>
//                     </figure>
//                     <NavLink to="/Login" className='logo'>I am already Login</NavLink>
//       </div>
//     </div>
//     </div>
//   );
// };
// // };
// export default Signup;
