import React, { useEffect } from "react";
import { PlacementTalksVideosData } from '../data/PlacementTalksVideosData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
const PlacementTalksVideos = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <Helmet>
                <title>Placement Talks Video</title>
                <meta name="description" content="" />

            </Helmet>
            <header id="page-header">
                <div className="page-heading">
                    <h2>Placement Talks Videos</h2>
                </div>
            </header>

            <div className="page-container">



                {PlacementTalksVideosData.map(item => {
                    return (
                        <div className="card-lg-container" data-aos="fade-up">
                            <div className="row">
                                <div className="col-md-6">
                                    <iframe width="100%" height="315" src={item.VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="col-md-6">
                                    <h3>{item.Title}</h3>
                                    <p>{item.Description}</p>
                                    <a href={item.peopleLinkedin} rel="noreferrer" target="_blank">
                                        <button className="card-tags">
                                            {item.people}
                                        </button></a>

                                </div>
                            </div>
                        </div>
                    )
                })}









            </div>




        </div>
    )
}

export default PlacementTalksVideos