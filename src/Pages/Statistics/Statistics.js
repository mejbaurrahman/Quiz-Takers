import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Pie, PieChart, Tooltip } from 'recharts';

export default function Statistics() {
    
      
    const quizItem = useLoaderData();
  return (
    <div className='container'>
    <h1 className='text-uppercase text-md-center fw-lighter my-3 border border-3 border-primary d-inline-block p-2'>Quiz Total Statistics</h1>
    <hr  className=''/>
    <div className='row mt-4 p-2 g-md-2'>
        <div className='col-md-6 col-12'>
        <PieChart width={730} height={250}>
        <Pie data={quizItem.data} dataKey='total' nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        <Tooltip />
        </PieChart>
        </div>
        <div className='col-md-6 col-12 d-flex justify-content-center align-items-center'>
          <ul className='text-decoration-none'>
          {
            quizItem.data.map(quiz=><li 
            key={quiz.id}
            >
              {quiz.name} : {quiz.total}
            </li>)
          }
          </ul>
        </div>
    </div>
    </div>
  )
}
