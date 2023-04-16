import React, { useEffect } from "react";
import { BlogsData } from '../data/BlogsData'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <Helmet>
                <title>Blogs</title>
                <meta name="description" content="" />

            </Helmet>
            <header id="page-header">
                <div className="page-heading">
                    <h2>Blogs</h2>
                </div>
            </header>

            <div className="page-container">
                <div className="card-container">
                    <div className="row">
                        {BlogsData.map(item => {
                            return (
                                <div className='col-md-4'>
                                    <div className="card-item" data-aos="fade-up">
                                        <div className="card-item-img">
                                            <img src={item.image} alt='item' />
                                        </div>
                                        {item.Tags.map(tags => {
                                            return (
                                                <button className="card-tags">
                                                    {tags}
                                                </button>
                                            )
                                        })}
                                        <div className="card-item-content">
                                            <Link to={`/blogs/${item.BlogTitle}`} onClick={() => window.scrollTo(0, 0)}><p>{item.BlogTitle}</p></Link>

                                            <div class="card__footer">
                                                <div class="user">
                                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="user__image" class="user__image" />
                                                    <div class="user__info">
                                                        <p>{item.author}</p>
                                                        <small>{item.date}</small>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blogs