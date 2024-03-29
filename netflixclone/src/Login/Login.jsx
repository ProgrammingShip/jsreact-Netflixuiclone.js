import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png" alt="" />
                    {/* <Link to="/register"><button className='register-button'>Sign Up</button></Link> */}
                </div>
            </div>

            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or Phone' />
                    <input type="password" placeholder='Password' />
                    <button className='login-button'>Login</button>
                    <span>New to Netflix? <Link to="/register" className='link'><b>Sign up now.</b></Link></span>

                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b></small>
                </form>
            </div>
        </div>
    )
}

export default Login