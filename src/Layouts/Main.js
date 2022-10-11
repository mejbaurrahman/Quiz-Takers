import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Navigation from '../Shared/Navigation/Navigation'

export default function Main() {
  return (
    <div>
        <Navigation></Navigation>
        <Outlet></Outlet>
    </div>
  )
}
