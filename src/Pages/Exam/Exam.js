import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Exam() {

       const loader= useLoaderData();
       console.log(loader)
   
  return (
    <div>Exam</div>
  )
}
