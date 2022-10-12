import React from 'react'

export default function Result({total, length, wrongTotal}) {

    const avarage = length/3;
    
  return (
    <div className="card border-primary my-2 ">
  <div className="card-header">Quiz Result</div>
  <div className="card-body text-primary">
    <h5 className="card-title fw-lighter">Total Questions: {length}</h5>
    <h5 className="card-title fw-lighter">Correct Answer: {total} </h5>
    <h5 className="card-title text-danger fw-lighter">Wrong Answer: {wrongTotal} </h5>
    <h5 className="card-title text-warning fw-lighter">Don't Answer: {length-(total+wrongTotal)} </h5>
    
  </div>
</div>
  )
}
