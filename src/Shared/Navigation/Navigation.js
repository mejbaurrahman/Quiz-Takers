import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export default function Navigation() {

const active = true;
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
    
  <div className="container">
    <a className="navbar-brand text-primary fw-bold fs-3" href="#">
        <img src={logo} className="rounded-circle px-2" style={{width: '40px'}} alt="" />
        Quiz Takers
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/"><h4 className='text-primary fs-4 fw-semibold border-5 border-start-0 border-end-0 border-bottom-0 border-primary border-opacity-50'>Home</h4></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/quiz"><h4 className='text-primary fs-4 fw-semibold border-5 border-start-0 border-end-0 border-bottom-0 border-primary border-opacity-50'>Quiz</h4></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/stats"><h4 className='text-primary fs-4 fw-semibold border-5 border-start-0 border-end-0 border-bottom-0 border-primary border-opacity-50'>Statictics</h4></Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" aria-current="page" to="/blog"><h4 className='text-primary fs-4 fw-semibold border border-5 border-start-0 border-end-0 border-bottom-0 border-primary border-opacity-50'>Blog</h4></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
