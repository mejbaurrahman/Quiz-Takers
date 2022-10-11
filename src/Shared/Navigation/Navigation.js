import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
          <a className={active? `nav-link text-decoration-underline text-warning fs-5 fw-lighter`: 'nav-link text-decoration-underline text-primary fs-5 fw-lighter'} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-underline text-primary fs-5 fw-lighter" href="#">Quiz</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-underline text-primary fs-5 fw-lighter" href="#">Statistics</a>
        </li>
        <li className="nav-item text-decoration-underline">
          <a className="nav-link text-decoration-underline text-primary fs-5 fw-lighter" href="#">Blog</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
