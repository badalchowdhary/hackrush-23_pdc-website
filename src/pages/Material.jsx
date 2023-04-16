import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
const Material = () => {
    return (
        <div>
            <Helmet>
                <title>Preparation Materila</title>
                <meta name="description" content="" />

            </Helmet>
            <header id="page-header">
                <div className="page-heading">
                    <h2>Material</h2>
                </div>
            </header>


            <div className="page-container">
                <div className="card-container">
                    <div className="row">
                    
                        <div className='col-md-4'>
                            <div className="card-item" data-aos="fade-up">
                            <div className="card-item-img">
                                    <img src="https://images.unsplash.com/photo-1659570456681-c2745e7003aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWR5JTIwbWF0ZXJpYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt='item' />
                                </div>
                                <div className="card-item-content">
                                    <Link to="/material/prep-mat" onClick={() => window.scrollTo(0, 0)}>
                                        <p>PrepMat</p></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="card-item" data-aos="fade-up">
                            <div className="card-item-img">
                                    <img src="https://plus.unsplash.com/premium_photo-1680037568203-08fb7b56926b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBvZGNhc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt='item' />
                                </div>
                                <div className="card-item-content">
                                    <Link to="/material/placement-talks" onClick={() => window.scrollTo(0, 0)}>
                                        <p>Placement Talks Videos</p></Link>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>




            </div>

        </div>


    )
}

export default Material