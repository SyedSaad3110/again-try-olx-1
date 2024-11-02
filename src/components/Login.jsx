import React, { useRef, useState } from 'react'
import './Login.css';
import { useFirebase } from './Firebase/FirebaseContext';
import Loader from './Loader/Loader';

function Login() {
  const firebase = useFirebase();
  const container = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);


  // register btn
  const registerBtnActive = () => {
       container.current.classList.add('active');

  };
  
  // login btn
  const loginBtnActive = () => {
      container.current.classList.remove('active')
  };

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    firebase.setRegisterErr('')
        try {
          await new Promise(resolve => setTimeout(resolve, 4000))
          setLoading(false);
          await firebase.signupUserWithEmail(email, password);
          // await firebase.putData("users/" + "OLX", {email, password} )
        } catch (error) {
          console.error("Register failed:", error.message);
        } finally{
          setLoading(false)
        }
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    firebase.setError('')
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false)
      await firebase.loginWithEmailAndPassword(email, password)
    } catch (error) {
     console.error("Login failed:", error.message)
    } finally{
      setLoading(false);
    }
  };
//  google login
  const googleLogin = (e) => {
    e.preventDefault();
    firebase.siginWithGoogle();
  };
//  github ;login
  const gitLogin = (e) => {
    e.preventDefault();
      firebase.signinWithGithub();
  };

  // forget password
  const forget = () => {
    firebase.forgetPassword(email) 
  }

  return (
    <>
    <div className="login-container" ref={container}>
      <div className="login-signup-box">
        
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input 
            type="text" 
            placeholder='Email' 
            onChange={(e)=> setEmail(e.target.value)} 
            value={email} 
            required/>
            <i class="fa-solid fa-user"></i>
          </div>

          <div className="input-box">
            <input type="Password" 
            placeholder='Password'
            onChange={(e)=> setPassword(e.target.value)} 
            value={password} 
            required/>
            <i class="fa-solid fa-lock"></i>
          </div>
          <div className="password-check">
             <p>{firebase.error}</p>
          </div>
          <div className="forget-link">
            <a href="#" onClick={forget}>Forget Password</a>
          </div>
          <button type='submit' class="btn" onClick={login} disabled={loading}>Login</button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <a href="#" onClick={googleLogin}><i class="fa-brands fa-google"></i></a>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" onClick={gitLogin}><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </form>
      </div>
           
      <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" 
            placeholder='Username' 
            onChange={(e)=> setUsername(e.target.value)} 
            value={username}
            required/>
            <i class="fa-solid fa-user"></i>
          </div>

          <div className="input-box">
            <input type="email" 
            placeholder='Email' 
            onChange={(e)=> setEmail(e.target.value)} 
            value={email}
            required/>
            <i class="fa-solid fa-envelope"></i>
          </div>

          <div className="input-box">
            <input type="Password" 
            placeholder='Password'
            onChange={(e)=> setPassword(e.target.value)} 
            value={password} 
            required/>
            <i class="fa-solid fa-lock"></i>
          </div>
          <button type='submit' class="btn" onClick={register} disabled={loading}>Resister</button>
          <p>or register with social platforms</p>
          <div className="register-check">
            <p>{firebase.registerErr}</p>
          </div>
          <div className="social-icons">
            <a href="#"><i class="fa-brands fa-google"></i></a>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-github"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </form>
      </div>
 
         <div className="toogle-box">
         <div className="toogle-panel toogle-left">
           <h1>Hello, Welcome</h1>
          <p>Don't have an account</p>
          <button class="btn register-btn" onClick={registerBtnActive}>Register</button>
         </div>
       </div>
        

      <div className="toogle-box">
        <div className="toogle-panel toogle-right">
          <h1>Welcome Back</h1>
          <p>Already have an account</p>
          <button class="btn login-btn" onClick={loginBtnActive}>Login</button>
        </div>
      </div>
     
     { loading && <Loader/>}
      </div>
    </div>
    
    
    </>


  )
}

export default Login
