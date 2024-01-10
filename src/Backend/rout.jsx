import React from "react";
import {Routes, Route} from 'react-router-dom'
import Sign_up from "../FrontEnd/sign_up"
import Login from "../FrontEnd/login"
import Contributor from "../FrontEnd/Contributor";
import Profile from "../FrontEnd/profile";
import Landing from "../FrontEnd/landing";

function Rout() {
    return(
        <>
        <Routes>
            <Route path= '/' element={<Landing/>}/>
            <Route path= '/signup' element={<Sign_up/>}/>
            <Route path= '/signin' element={<Login/>}/>
            <Route path='/contributor' element={<Contributor/>}/>
            <Route path= '/profile' element={<Profile/>}/>
           
        </Routes>
        </>
    )
}

export default Rout