import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login,signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {

  const [signin,setSignIn]=useState("Sign In");
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [loading,setLoading]=useState(false);

  const user_Authentication=async(e)=>{
        e.preventDefault();
        setLoading(true);
        if(signin==="Sign In"){
          await login(email,password);
        }else{
          await signup(name,email,password);
        }
        setLoading(false);
        }

  return (
    loading?<div className="spinner">
      <img src={netflix_spinner}></img>
    </div>:
    <div className='login'>
      <img src={logo} className='login-img'></img>
      <div className="sign-in-form">
      <h1>{signin}</h1>   
        <form action="">
        {signin==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter your Name"></input>:<></>}
            
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email'></input>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password'></input>
            <button type="submit" onClick={user_Authentication}>{signin}</button>
            <div className="help">
              <div className="remember">
                <input type="checkbox"></input>
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help</p>
            </div>
        </form>
        <div className="form-switch"> 
          {signin==="Sign In"?<p>New to Netflix <span onClick={()=>{setSignIn('Sign Up')}}>Sign Up Now</span></p>:<p>Already have Account <span onClick={()=>{setSignIn('Sign In')}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
