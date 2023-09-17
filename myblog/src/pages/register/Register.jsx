import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='register'>
      <span className='registertitle'>Register</span>
        <form action="#" className="registerform">
        <label>Username</label>
            <input type="text" className="registerInput" placeholder='Enter your Username'/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder='Enter your email'/>
            <label>Password</label>
            <input type="password" className='registerInput' placeholder='Enter your password'/>
            <button className='registerloginButton'>Register</button>
        </form>
        <button className="RegisterButton">Login</button>
    </div>
  )
}

export default Register