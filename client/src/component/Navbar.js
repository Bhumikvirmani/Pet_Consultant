import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import pet from '../images/pet.jpg';
import "../App.css"

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
        {/* <li className="nav-item">
          <NavLink class="nav-link" aria-current="page" to="/">Home</NavLink> 
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Signup">Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/QA">QA</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/BookAppointment">BookAppointment</NavLink>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
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