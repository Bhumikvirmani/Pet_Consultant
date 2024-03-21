import React,{useState} from 'react'
import pet from '../images/pet.jpg';
import './styled_components/Signup.css'
import { NavLink } from 'react-router-dom';


const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setpassword]=useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await fetch('/login',{
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,password
        }),
      });
      const data = await response.json();
      console.log(data.message);
    }catch(error){
      console.error(error);
    }
  };

  return (
    <>
     <section className='Signin'>
         
         <div className='Signin'>
           <div className='Signin-contact'>
              <div className='signup-form'>
                <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handleSubmit}className='registered-form' id='registered-form'>

                <div className='form-group'>
                   <label htmlFor='email'>
                   </label>
                   <input type="text" id="email" name="email" autoComplete='off' placeholder="Enter your email" value={email} onChange={(e)=>{
                    setEmail(e.target.value)}}
                   />
                </div>

                <div className='form-group'>
                   <label htmlFor='password'>
                   </label>
                   <input type="password" id="password" name="password" autoComplete='off' placeholder="Enter your password"  value={password} onChange={(e)=>{
                    setpassword(e.target.value)}}/>
                </div>

                <div className='form-button'>
                   <input type='submit' name='signin' id='signin' className='form-submit' value="Login"/>
                </div>

                </form>
              <div className='signup-image'>
                 <figure>
                 <img src={pet} alt='pet'/>
                 </figure>
                 <NavLink to="/Signup" className='logo'>Signup</NavLink>
              </div>
              </div>
            </div>
          </div>
     </section>
    </>
  )
}

export default Login;