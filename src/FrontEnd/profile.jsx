import React from 'react'
import './style.css'


function Profile () {
  return (
    <>
    <div className='container'>
            <div className='form'>
                <h2>Profile</h2>
                <div className='box'>
                   <label> username: </label>
                </div>
                <div className='box'>
                    <label>Email:
                         </label>
                </div>
                <div className='box'>
                    <label>
                     Date Of birth: 
                    </label> 
                </div>
                <div className='box'>
                    <label>
                    Category: 
                    </label>
                </div>
            </div>
         </div>
    </>
  )
}

export default Profile
