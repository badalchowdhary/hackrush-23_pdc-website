import React, { useEffect } from "react";
import { ClubsData } from "../data/ClubsData";
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const Clubs = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Helmet>
                <title>Clubs</title>
                <meta name="description" content="" />

            </Helmet>
      <header id="page-header">
        <div className="page-heading">
          <h2>Clubs and Focused Groups</h2>
        </div>
      </header>


      <div className="page-container">


        {ClubsData.map(item => {
          return (
            <div className="card-lg-container" data-aos="fade-up">
              <div className="row">
                <div className="col-md-4">
                  <div className="card-lg-container-img">
                    <img src={item.image} alt='item' />

                  </div>

                </div>
                <div className="col-md-8">
                  <div className="card-lg-container-content">
                  <Link to={`/club/${item.ClubName}`} onClick={() => window.scrollTo(0, 0)}><h3>{item.ClubName}</h3></Link>

                    
                    <p>{item.description}</p>
                    <div className="card-lg-container-btn">
                    <Link to={`/club/${item.ClubName}`} onClick={() => window.scrollTo(0, 0)}><button className="card-lg-btn">Read More </button></Link>

                    </div>
                    

                  </div>
                </div>
              </div>
            </div>

          )
        })}










      </div>
    </div>
  )
}

export default Clubs