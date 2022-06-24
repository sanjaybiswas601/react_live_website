import React,{ useState } from 'react'
// import { Navbar,Nav,Container,NavDropdown,Form,FormControl,Button,Card,CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './Firebase'



const Navbar = (props) => {
    const [user] = useAuthState(auth)
    const [show, setShow] = useState(false)
    const { userLoggedIn} = props
  return (
    <>
    <section className='navbar-bg'>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#">
    <i class="fas fa-solid fa-money-bill-wave"></i>
    Pay
    </a>
    <button className="navbar-toggler" type="button"
     data-bs-toggle="collapse" 
     data-bs-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" 
     aria-expanded="false" 
     aria-label="Toggle navigation"
      onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/contact">Contact</NavLink>
        </li>
      </ul>
      {
        userLoggedIn ? (
          <div>
           <form className="d-flex">
            {user?.email}
             <NavLink className="btn btn-outline-success btn-style" type="submit" >Log Out</NavLink>
           </form>
          </div>
        ) : (
          <div>
          <form className="d-flex">
             <NavLink className="btn btn-outline-success btn-style" type="submit" to="/signup">SignUp</NavLink>
             <NavLink className="btn btn-outline-success btn-style" type="submit" to="/login">Login</NavLink>
           </form>
          </div>
        )
      }
      
    </div>
  </div>
</nav>
    </section>
    </>
  )
}

export default Navbar