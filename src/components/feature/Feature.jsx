import React from 'react';
import './feature.css';

const Feature = ( { title, text } ) => {
    return (
        <div className='gpt3__features-container__feature'>
            <div className='gpt3__features-container__feature-title'>
                <div />
                <br />
                 <h1>{title}</h1>
                 <br />
            </div>

            <div className='gpt3__features-container__feature-text'>
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default Feature;
