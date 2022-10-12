import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Question from '../../Componants/Question/Question';

export default function Exam() {

  
  const questions= useLoaderData();
   
  return (
    <div className='container mt-5'>
      <h1 className='text-uppercase text-md-center fw-lighter my-3 border border-3 border-primary d-inline-block p-2'>Quiz of {questions.data.name}</h1>
      <hr  className=''/>
      <div className='mt-3 row g-2'>
          <div className='col-md-9 col-12'>
              {
                questions.data.questions.map(quizQuestion=><Question
                key={quizQuestion.id}
                quizQuestion={quizQuestion}
                ></Question>)
              }
          </div>
          <div className='col-md-3 col-12'>

          </div>
      </div>
    </div>
  )
}
