import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [loginSetup , setLoginSetup] = useState(true)
  return (
    <>
      <div className="login-container">
        {
          loginSetup ? 
          <div className="login-box">
          <div className="login-name">
            <h3>Singup</h3>
          </div>
          <form action="">
            <div className="input-box">
              <label htmlFor="">User Name</label>
              <input type="text" placeholder='Username' />
            </div>
            <div className="input-box">
            <label htmlFor="">E-mail</label>
              <input type="email" placeholder='E-mail' />
            </div>
            <div className="input-box">
            <label htmlFor="">Password</label>
              <input type="password" placeholder='password' />
            </div>
            <div className="input-box">
            <label htmlFor="">Password</label>
              <input type="password" placeholder='confirm password' />
            </div>
            <button>Signup</button>
            <div className="login-setup">
              <p>By continue , you have a account</p>
              <p className='login-set' onClick={()=> setLoginSetup(false)}>Login</p>
            </div>
          </form>
          
        </div>
        :
        <div className="login-box">
        <div className="login-name">
          <h3>login</h3>
        </div>
        <form action="">
          <div className="input-box">
            <label htmlFor="">User Name</label>
            <input type="text" placeholder='Username' />
          </div>
          <div className="input-box">
          <label htmlFor="">E-mail</label>
            <input type="email" placeholder='E-mail' />
          </div>
          <div className="input-box">
          <label htmlFor="">Password</label>
            <input type="password" placeholder='password' />
          </div>
          <div className="input-box">
          <label htmlFor="">Password</label>
            <input type="password" placeholder='confirm password' />
          </div>
          <div className="sinup">
            <p className='sinup' onClick={()=> setLoginSetup(true)}>signup</p>
          </div>
          </form>
          </div>
        }
       
      </div>
    </>
  )
}

export default Login