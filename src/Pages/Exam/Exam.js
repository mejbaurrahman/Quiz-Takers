import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'
import Question from '../../Componants/Question/Question';
import Result from '../../Componants/Result/Result';


export default function Exam() {
  let numberQ =1;
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(null);
  const [number, setNumber] = useState(0);
  
  const questions= useLoaderData();
   
  return (
    <div className='container mt-5'>
      <div className='w-50'>
      {
        correct ===1 ? <Alert className='alert alert-success'>Answer is Right</Alert> : correct ===2 ? <Alert className='alert alert-danger'>Answer is wrong</Alert> : <p></p>
      }
      </div>
      <h1 className='text-uppercase text-md-center fw-lighter my-3 border border-3 border-primary d-inline-block p-2'>Quiz of {questions.data.name}</h1>
      <hr  className=''/>
      <div className='mt-3 row g-2'>
          <div className='col-md-9 col-12'>
              {
                questions.data.questions.map(quizQuestion=><Question
                key={quizQuestion.id}
                qN={numberQ++}
                quizQuestion={quizQuestion}
                setTotal={setTotal}
                setCorrect={setCorrect}
                ></Question>)
              }
          </div>
          <div className='col-md-3 col-12 '>
              <Result total={total} length = {questions.data.questions.length}></Result>
          </div>
      </div>
    </div>
  )
}
