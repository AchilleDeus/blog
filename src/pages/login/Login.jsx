import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
export default function Login() {
  return (
    <div className='login'>
<span className="loginTitle">Login</span>
<form className="loginForm">

<label >Email</label>
<input type="text" className='loginInput' placeholder='Enter Your email...' />
<label >Password</label>
<input type="password" className='loginInput' placeholder='Enter Your password...' />
<button className="loginButton">Login</button>
<button className="loginRegisterButton">
  <Link  style={{textDecoration:'none'}} to="/register"><span className="spanColore">Register</span></Link></button>
</form>


    </div>
  )
}
