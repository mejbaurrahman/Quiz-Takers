import React from 'react';
import Banner1 from '../../images/Banner1.jpg';
import Banner2 from '../../images/Banner2.jpg';
import Banner3 from '../../images/Banner3.jpg';

import './Banner.css';

export default function Banner() {
  return (
    <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active position-relative" data-bs-interval="10000">
      <img src={Banner1} className="d-block w-100" style={{height: '600px'}} alt="..."/>
      <div className="position-absolute top-50 start-50 translate-middle heading">
        <h1 className='fw-semibold fs-1 text-center text-primary text-opacity-50'>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item position-relative" data-bs-interval="2000">
      <img src={Banner2} className="d-block w-100" style={{height: '600px'}} alt="..."/>
      <div className="position-absolute top-50 start-50 translate-middle heading">
        <h1 className='fw-semibold fs-1 text-center text-primary text-opacity-50'>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item position-relative">
      <img src={Banner3} className="d-block w-100 " style={{height: '600px'}} alt="..."/>
      <div className="position-absolute top-50 start-50 translate-middle heading">
        <h1 className='fw-semibold fs-1 text-center text-primary text-opacity-50'>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
