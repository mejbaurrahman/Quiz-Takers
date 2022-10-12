import React from 'react';
import { Link } from 'react-router-dom';
import Banner3 from '../../images/Banner3.jpg';

import './Banner.css';

export default function Banner() {
  return (
   <div className='bg-primary bg-opacity-10 p-3'>
     <div className='row row-cols-md-2 row-cols-1'>
        <div className='col p-4'>
          <img src={Banner3} style={{width: '100%'}} className='rounded' alt="" />
        </div>
        <div className='col d-flex justify-content-center align-items-center'>
            <div className=''>
                <h1 className='text-primary fw-lighter text-center'>Quiz Takers</h1>
                <h5 className='text-secondery fw-light text-center'>This is about quiz exam website. You can easily check your knowledge about a particular topics. </h5>
                <div className='d-flex justify-content-center'>
                <Link to='/quiz'><button className='btn btn-outline-primary'>Go to Topics</button></Link>
                </div>
                
            </div>
        </div>

    </div>
   </div>
  )
}
