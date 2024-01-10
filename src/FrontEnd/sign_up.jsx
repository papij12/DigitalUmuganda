import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {firestore} from '../Backend/firebase' 
import {getDocs, addDoc,collection, where, query} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Backend/firebase'
import './style.css';

function Sign_up(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[gender, setGender] = useState('')
    const[dateofbirth, setDateOfBirth] = useState('')
    const[category, setCategory] = useState('')
    const ref = collection(firestore,"users")
    const navigate = useNavigate()
    const signup = (e) =>
    {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
           if(userCredential){
             addDoc(ref, {Name: name, Email: email, Password: password, Gender: gender, DateOfBirth: dateofbirth, Category: category })
             navigate('/signin')
           }
           else{
             alert('This account already exist')
           }
        })
        .catch((error) => {
            alert(error)
        })
 
    }
    return (
        <>
         <div className='container'>
            <div className='form'>
                <h2>Sing Up</h2>
                <div className='box'>
                    <input type='text' placeholder='Full Name' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='box'>
                    <input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='box'>
                    <input type='password' placeholder='Password'  onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='box'>
                    <label>
                        Gender: 
                        <select  onChange={(e) => setGender(e.target.value)}>
                        <option></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                </select>
                    </label>
               
                </div>
                <div className='box'>
                    <label>
                     Date Of birth: 
                     <input type='date'  onChange={(e) => setDateOfBirth(e.target.value)}></input>
                    </label>
                    
                </div>
                <div className='box'>
                    <label>
                    Category: 
                    <select  onChange={(e) => setCategory(e.target.value)}>
                        <option></option>
                        <option value="Contributor">Contributor</option>
                        <option value="Validator">Validator</option>
                        <option value="Admin">Admin</option>
                    </select>
                    </label>
                
                </div>
                <p>Already have an account<Link to='/signin'> sign In</Link></p>
                <button onClick={signup}>Sign Up</button>
            </div>
         </div>
        </>
    )
}
export default Sign_up

// const matchEmail = query(ref, where('Email', '==', email))
// try {
//     const snapshot = await getDocs(matchEmail)
//     const emailMatchingArray = snapshot.docs.map((doc) => doc.data)
//     if (emailMatchingArray.length > 0) {
//         alert("This Email address already Exsist")
//     }
//     else{
//         await addDoc(ref, {Name: name, Email: email, Password: password, Gender: gender, DateOfBirth: dateofbirth, Category: category })
//         alert('SignUp Successfull')
//         navigate('/signin')
//     }
// } catch (error) {
//     alert(error)
// }