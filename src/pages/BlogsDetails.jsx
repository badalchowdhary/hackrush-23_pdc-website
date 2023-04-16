import React, { useEffect, useState } from 'react';
import { BlogsData } from '../data/BlogsData'
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import EmptyList from '../components/EmptyList';

const BlogsDetails = () => {
    const { BlogTitle } = useParams();
    const [Blog, setBlog] = useState(null);
    useEffect(() => {
        let Blog = BlogsData.find((Blog) => Blog.BlogTitle === (BlogTitle));
        if (Blog) {
            setBlog(Blog);
        }
    }, [BlogTitle]);
  return (
    <div className='main-container'>
    {Blog ? (
        <div>
            <Helmet>
                <title>Blogs | {Blog.BlogTitle}</title>
            </Helmet>

            <header id="page-header">
                <div className="page-heading">
                    <h2>Blogs</h2>
                </div>
            </header>

            <div className="page-container">
                <div className="blog-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-heading">
                                <h1>{Blog.BlogTitle}</h1>
                            </div>

                            <div className="para-contaent">
                                <p>Published Date: {Blog.date}</p>
                                <p>Author: {Blog.author}</p>
                                <p>{Blog.content}</p>
                            </div>


                        </div>
                        <div className="col-md-6">
                            <img src={Blog.image} alt="event" />


                        </div>
                    </div>

                </div>








            </div>
        </div>
    ) : (
        <EmptyList />
    )}
</div>
  )
}

export default BlogsDetails