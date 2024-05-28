import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import navlogo from "../../assets/logo.avif"
import cart from "../../assets/cart.png"
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className="nav-logo" src={navlogo} alt=''/>
        <p>Shoppers admin panel</p>
        <img className= "nav-profile" src={cart} alt=''/>
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')?
            <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>LOGOUT</button>:<Link to={'/login'}><button>Login</button> </Link>}
        </div> 
    </div>
  )
}

export default Navbar