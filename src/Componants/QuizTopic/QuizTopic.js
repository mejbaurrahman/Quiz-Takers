import React from 'react'
import { Link } from 'react-router-dom';

export default function QuizTopic({quiz}) {
   const {id,name, logo, total} = quiz;
  return (
    
    <div className='col-md-6 col-12'>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
    <div className="col-md-4  bg-opacity-25 bg-primary">
      <img src={logo} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Total Quiz: {total}</p>
        <Link to={`/quiz/${id}`}><button className='btn btn-outline-primary'>Enter To Exam</button></Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
