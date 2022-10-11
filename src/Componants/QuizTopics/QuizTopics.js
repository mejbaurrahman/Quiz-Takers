import React from 'react'
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic'

export default function QuizTopics() {

  const quizItem = useLoaderData();
  const data = quizItem.data;
  console.log(data);
  return (
    <>
    <div className='container'>
        <h1 className='text-uppercase text-md-center fw-lighter my-3 border border-3 border-primary d-inline-block p-2'>Quiz Topics</h1>
        <hr  className=''/>
        <div className='row g-2'>
            {
              data.map(quiz=> <QuizTopic 
              key = {quiz.id}
              quiz = {quiz}
              ></QuizTopic>)
            }
        </div>
    </div>
    </>
    
  )
}
