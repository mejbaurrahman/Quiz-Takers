import React from 'react'

export default function Result({total, length}) {

    const avarage = length/3;
    
  return (
    <div className="card border-primary my-2 ">
  <div className="card-header">Quiz Result</div>
  <div className="card-body text-primary">
    <h5 className="card-title">Total Questions: {length}</h5>
    <h5 className="card-title">Correct Answer: {total} </h5>
    {
        total>=avarage ? <p className='card-text text-success'>Great! You have passed. </p> : total>=1 && total<avarage? <p className='card-text text-warning'>Weldone! You have opend your score {total}. </p>:<p className='card-text text-danger'>Continue Reading! Your score is {total}</p>
    }
    
  </div>
</div>
  )
}
