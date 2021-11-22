import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {

    return (
        <section className='gpt3__blog section__padding' id='blog'>

            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>A lot is happening,
                    We are blogging about it.</h1>
            </div>

            <div className='gpt3__blog-container'>

                <div className='gpt3__blog-container__groupA'>
                    <Article imgURL={blog01}
                    />
                </div>


                <div className='gpt3__blog-container__groupB'>
                    <Article imgURL={blog02} />
                    <Article imgURL={blog03} />
                    <Article imgURL={blog04} />
                    <Article imgURL={blog05} />
                </div>
            </div>

        </section>
    )
}

export default Blog;
