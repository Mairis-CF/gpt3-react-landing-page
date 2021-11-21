import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Menu, NavbarSing } from './navbarComponents';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <section className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>

                <div className='gpt3__navbar-links-logo'>
                    <img src={logo} alt="logo" />
                </div>

                <div className='gpt3__navbar-links-container'>
                    <Menu />
                </div>

            </div>

            <div className='gpt3__navbar-sing'>
                <NavbarSing />
            </div>

            <div className='gpt3__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu-container scale-up-center '>
                        <div className='gpt3__navbar-menu-container-links'>
                            
                            <Menu />

                            <div className='gpt3__navbar-menu-container-links-sing'>
                                <NavbarSing />
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Navbar;
