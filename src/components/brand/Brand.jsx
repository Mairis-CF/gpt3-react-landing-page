import React from 'react';
import { google, slack, atlassian, shopify, dropbox } from './imports';
import './brand.css';


const Brand = () => {
    return (
        <section className='gpt3__brand section__padding'>

            <div>
                <img src={atlassian} alt='atlassian' />
            </div>

            <div>
                <img src={google} alt='google' />
            </div>

            <div>
                <img src={shopify} alt='shopify' />
            </div>

            <div>
                <img src={dropbox} alt='dropbox' />
            </div>

            <div>
                <img src={slack} alt='slack' />
            </div>

        </section>
    )
}

export default Brand;
