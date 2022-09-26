import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import google from './google.png';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/shop';
    const handleEmail = (e) => {
        setEmail(e.target.value); // To get value from input
    }

    const handlePassword = (e) => {
        setPassword(e.target.value); // To get value from input
    }

    const handleSignin = (e) => {
        e.preventDefault(); // Prevent page reloading
        signInWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        console.log(error?.message)
        if (error?.message === "Firebase: Error (auth/wrong-password).")
            setErrorMessage("Password is incorrect");
        else if (error?.message === "Firebase: Error (auth/user-not-found).")
            setErrorMessage("User not found!")
    }, [error])

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])

    return (
        <div className='auth-container'>
            <div className='form-container'>
                <h2>Login</h2>
                <form onSubmit={handleSignin}>
                    <label>Email</label><br />
                    <input type="email" onBlur={handleEmail} name="email" id="email" /> <br /><br /> {/* onBlur: handleEmail-> call-> takes value from input field-> set input's value to email */}
                    <label>Password</label><br />
                    <input type="password" onBlur={handlePassword} onClick={() => setErrorMessage("")} name="password" id="password" /> <br />
                    <p className="pass-err-msg">{errorMessage}</p>
                    <input type="submit" className='login-btn' value="Login" />
                    {loading && <i className="fa-solid fa-spinner spinner"></i>}
                </form>
                <p>New to Ema-John?<Link to="/signup">Register Now</Link></p>
                <div className='span-container'>
                    <span></span>
                    Or
                    <span></span>
                </div>
                <button className='google-btn' onClick={() => signInWithGoogle()}><img src={google} alt="" /> <span>Continue With Google</span> </button>
            </div>
        </div >
    );
};

export default Login;