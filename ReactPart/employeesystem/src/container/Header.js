import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

export default function Header({title}) {
  return (
    <>
  
    <div className='navbar'>
    <ul class="nav-links">

    <Link to='/'>
    <li class="center"><button >Employee Management System - {title}</button></li>
    </Link>
  
  </ul>
  </div>
  </>
  )
}
