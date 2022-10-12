import React from 'react'
import QuizOption from '../QuizOption/QuizOption';

export default function Question({quizQuestion}) {
    const {question, options, correctAnswer} = quizQuestion;
    console.log(correctAnswer)
    
  return (
    <div className='p-3 border border-primary mt-2'>
        <h5 className='text-primary text-center'>{question}</h5>
        <div className='row row-cols-md-2 row-cols-1 g-2 gx-2'>
         {
            options.map((option, index)=><QuizOption 
            key={index}
            option = {option}
            ></QuizOption>)
         }  
        </div>

    </div>
  )
}
