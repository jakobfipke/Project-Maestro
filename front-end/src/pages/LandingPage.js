import React from 'react';

import "./styles/LandingPage.css"
import Logo from './../images/logo.jpg'

//Creates the landing page with Login and Register button
const LandingPage = () => (
    <React.Fragment>
    <div className='LandingPage'>
        <p className="landing-welcome">Welcome to Project Maestro - edited</p>
        <img className="landing-logo" src={Logo}/>
        <div className='login'>
            <a href='/login'>
                <button className="btn btn-success landing-btn">
                    <div className="landing-btn-text">LOGIN</div>
                </button>
            </a>
        </div>
        <div className='register'>
            <a href='/register'>
                <button className="btn btn-success landing-btn">
                    <div className="landing-btn-text">REGISTER</div>
                </button>
            </a>
        </div>
    </div>
    </React.Fragment>
)

export default LandingPage;
