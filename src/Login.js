import React, { useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import { auth } from './firebase.js'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            navigate("/");
        })
        .catch((e) => alert(e.message));
    }
    const register = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth => {
            navigate("/");
        })
        .catch((e) => alert(e.message));
    }
  return (
    <div className='login'>
        <Link to="/">
        <img className='login_logo' src="fzb_logo.svg" alt="" />
        
        </Link>
        <div className="login_container">
            <h1>Sign in</h1>
            <form action="">
            <h5>E-mail</h5>
            <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
            <h5>Password</h5>
            <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
            <button onClick={login} type='submit' className='login_btn'>Sign In</button>
            </form>
            <p>By Signing-in you agree to Fancz Boyz's Conditions of Use & Sale. Please use our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice </p>
            <button onClick={register} className='register_btn'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login