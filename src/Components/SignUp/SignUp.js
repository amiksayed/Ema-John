import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';
import google from './google.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [createUserWithEmailAndPassword, , , error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value) // To get value from input
    }

    const handlePassword = (e) => {
        setPassword(e.target.value) // To get value from input
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value) // To get value from input
    }

    useEffect(() => {
        if (error?.message === 'Firebase: Error (auth/email-already-in-use).')
            setErrorMessage('Email Already in Use');
    }, [error])

    const handleSignup = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setErrorMessage("Passwords must be at least 6 characters")
            return
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords must match")
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate("/")
    }

    return (
        <div className='auth-container'>
            <div className='form-container'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <label>Email</label><br />
                    <input type="email" onBlur={handleEmail} name="text" id="email" /> <br /><br />
                    <label>Password</label><br />
                    <input type="password" name="password" id="password" onBlur={handlePassword} />
                    <br /><br />
                    <label>Confirm Password</label><br />
                    <input type="password" name="confirmPassword" id="confirmPassword" onBlur={handleConfirmPassword} /> <br />
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                    <input type="submit" className='signup-btn' value="Signup" />
                </form>
                <p>Already Have An Account?<Link to="/login">Login</Link></p>
                <div className='span-container'>
                    <span></span>
                    Or
                    <span></span>
                </div>
                <button className='google-btn' onClick={ () =>  signInWithGoogle()}><img src={google} alt="" /> <span>Continue With Google</span> </button>
            </div>
        </div>
    );
};

export default SignUp;  