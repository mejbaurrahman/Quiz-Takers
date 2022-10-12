import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


export default function Navigation() {

const active = true;
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#e3f2fd'}}>
    
  <div className="container">
    <Link  className="navbar-brand text-primary fw-bold fs-3" to="/">
        <img src={logo} className="rounded-circle px-2" style={{width: '50px'}} alt="" />
        Quiz Takers
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/"><h6 className='text-uppercase fw-semibold'>Home</h6></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/quiz"><h6 className='text-uppercase fw-semibold'>Topics</h6></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/stats"><h6 className='text-uppercase fw-semibold'>Statistics</h6></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/blog"><h6 className='text-uppercase fw-semibold'>Blog</h6></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
