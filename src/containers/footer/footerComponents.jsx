import React from 'react';

const FooterLinks = ({ linksTitle, firstLink, secondLink, thirdLink, fourthLink }) => {
    return (
        <div className='gpt3__footer-links__content'>
            <h4>{linksTitle}</h4>
            <p>{firstLink}</p>
            <p>{secondLink}</p>
            <p>{thirdLink}</p>
            <p>{fourthLink}</p>
        </div>
    )
}

export default FooterLinks;
