import React from 'react'
import "./register.css"

import {Link} from "react-router-dom"
export default function Register() {
  return (
    <div className='register'>
    <span className="registerTitle">Register</span>
    <form className="registerForm">
    
    <label >Username</label>
    <input type="text" className='registerInput' placeholder='Enter Your Username...' />
    <label >Email</label>
    <input type="text" className='registerInput' placeholder='Enter Your email...' />
    <label >Password</label>
    <input type="password" className='registerInput' placeholder='Enter Your password...' />
    <button className="registerButton">Register</button>
    <button className="registerLoginButton">
      
      <Link style={{textDecoration:'none'}} to='/login'><span className="spanColoreLogin">Login</span></Link>
     </button>
    </form>
    
    
        </div>
  )
}
