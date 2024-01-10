import React from 'react'
import './style.css';
import { Link } from "react-router-dom"

function Landing(){

 
  return (
    <>
    <div className='landing-container'> 
     <h1> Welcome to Digital Umuganda</h1>
      <div className='btn'>
        
            <Link to='/signin'>SingIn</Link>
            <Link to='/signup'>SingUP</Link>
      </div>
      </div>
    </>
  )
}
export default Landing
