import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Outlet, useLoaderData } from 'react-router-dom'
import Banner from '../../Componants/Banner/Banner'
import QuizTopics from '../../Componants/QuizTopics/QuizTopics'
import Navigation from '../../Shared/Navigation/Navigation'

export default function Home() {
 
  return (
    <>
       <div>
       <Banner></Banner>
       </div>
       <div className='mt-3'>
          <Outlet></Outlet>
       </div>
       

    </>
  )
}
