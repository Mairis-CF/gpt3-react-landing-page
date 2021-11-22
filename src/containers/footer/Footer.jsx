import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import FooterLinks from './footerComponents';
import './footer.css';

const Footer = () => {
    return (
        <section className='gpt3__footer section__padding'>

            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>
                    Do you want to step in to the future before others
                </h1>
            </div>

            <div className='gpt3__footer-btn'>
                <button type='button'>Request Early Access</button>
            </div>

            <div className='gpt3__footer-links'>

                <div className='gpt3__footer-links__logo'>
                    <img src={gpt3Logo} alt='gpt3 logo' />
                    <p>Crechterwoord,</p>
                    <p>@2021 GPT-3. All rights reserved.</p>
                </div>

                <FooterLinks
                    linksTitle='Links'
                    firstLink='Overons'
                    secondLink='Social Media'
                    thirdLink='Counters'
                    fourthLink='Contact'
                />

                <FooterLinks
                    linksTitle='Company'
                    firstLink='Terms & Conditions'
                    secondLink='Privacy Policy'
                    thirdLink='Contact'
                />

                <FooterLinks
                    linksTitle='Get in touch'
                    firstLink='Crechterwoord'
                    secondLink='085-132567'
                    thirdLink='info@talktome.net'
                />

            </div>
        </section>
    )
}

export default Footer;
