import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <section className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
               
                <div className='gpt3__navbar-links-logo'>
                     <img src={logo} alt="logo"/>
                </div>

                <div className='gpt3__navbar-links-container'>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#wgpt3'>What is GPT?</a></p>
                    <p><a href='#possibility'>Open AI</a></p>
                    <p><a href='#features'>Case Studies</a></p>
                    <p><a href='#blog'>Library</a></p>
                </div>
                
            </div>
        </section>
    )
}

export default Navbar;
