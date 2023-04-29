import React from 'react'
import "./Header.css"

export default function Header({title}) {
  return (
    <div id='header'>
        <h1>Employee Management System - {title}</h1>
    </div>
  )
}
