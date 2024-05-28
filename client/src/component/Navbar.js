import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import pet from '../images/pet.jpg';
import './Navbar.css';
// import "../App.css"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink className="navbar-brand" to="/">
      <img className="img"src={pet} alt='pet'/>
    </NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto me-2 ml-lg-0">
    
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/QA">QA</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/BookAppointment">BookAppointment</NavLink>
        </li>
      </ul>
      <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')?
            <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>LOGOUT</button>:<Link to={'/login'}><button>Login</button> </Link>}

      </div>
      
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar