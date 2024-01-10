import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './style.css';
import {getDocs, collection, where, query} from 'firebase/firestore'
import {firestore} from '../Backend/firebase'
import { auth } from "../Backend/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = (e) =>{
       
            e.preventDefault()
            signInWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                if(userCredential){
                    navigate('/contributor')
                  }
                  else{
                    alert("error")
                  }
            })
            .catch((error) =>{
                alert(error)
            })
    }
    return(
        <>
         <div className='container'>
            <div className='form'>
                <h2>Sing In</h2>
                <div className='box'>
                    <input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='box'>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <p>Don't have an account<Link to='/singup'> sign Up</Link></p>
                <button onClick={login}>Sign In</button>
            </div>
         </div>
        </>
    )
}
export default Login
// Other method to login
//  const ref = collection(firestore, 'users')
// try {
//     const emailMatch = query(ref, where('Email', '==', email))
//     const passwordMatch = query(ref, where('Password', '==', password))
//     const emailSnapshot = await getDocs(emailMatch)
//     const passwordSnapshot = await getDocs(passwordMatch)
//     const emailArray = emailSnapshot.docs.map((docs)=> docs.data()) 
//     const passwordArray = passwordSnapshot.docs.map((docs)=> docs.data())
//     if (emailArray.length > 0 && passwordArray.length > 0) {
//         alert('Login successfully.')
        
//          navigate('/contributor')
       
//     } else {
//         alert('Check your email and password or create account')
//     }
// } catch (error) {
//     alert(error)
// }