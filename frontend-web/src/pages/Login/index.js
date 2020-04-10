import React from 'react';
import backgroundImage from '../../assets/background.svg';
import decorationImage from '../../assets/decoration.svg';

import { FiLogIn, FiArrowRight } from 'react-icons/fi'

import './styles.css'

export default function Login() {
    return (
        <div className="container">

            <section className="sub-container">
                <div className="login-container">

                    <form >
                        <div className="textn-ico" >
                            <h1>Login</h1>
                            <FiLogIn size="50" className="icon" />
                        </div>

                        <input placeholder="Type your email" type="email" name="email" />
                        <input placeholder="Type your password" type="password" name="password" />
                        <input value="Let's go!" className="btn" type="button" name="" />
                    </form>
                </ div>

                <div className="textn-ico">
                    <p className="join-now">Don’t have an account?</p>
                    <a to="/" className="link"><FiArrowRight size="25"/></a>
                </div>

            </section>

            <img className="decoration" src={decorationImage} alt="Shoppy" />
            <img className="background" src={backgroundImage} alt="background" />
        </div>
    );
}