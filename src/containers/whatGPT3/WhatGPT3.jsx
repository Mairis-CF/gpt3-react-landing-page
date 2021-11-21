import React from 'react';
import { Feature } from '../../components/index-components';
import whgpt3Data from './whatGPT3Data';
import './whatgpt3.css';

const WhatGPT3 = () => {
    return (
        <section className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            
            <div className='gpt3__whatgpt3-feature'>
                 
            <Feature 
                title='What is GPT-3'
                text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. 
                His defective nor convinced residence own. 
                Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. 
                Friendly bachelor entrance to on by.'

                />  

            </div>

            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'> The possibilities are beyond your imagination </h1>
                <p>Explore The Library</p>
            </div>

            <div className='gpt3__whatgpt3-container'>
              
               {whgpt3Data.map((item, index) => (
                 
                 <Feature 
                   key={item.title + index}
                   title={item.title} 
                   text={item.text}
                   />
               ))}
               
            </div>

        </section>
    )
}

export default WhatGPT3
