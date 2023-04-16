import React,{useEffect} from "react";
import { TeamData } from '../data/CurrentTeamData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Helmet>
                <title>Team | Current Team</title>
                <meta name="description" content="" />

            </Helmet>
      <header id="page-header">
        <div className="page-heading">
          <h2>Team</h2>

        </div>
      </header>


      <div className="page-container">



        <section id="team" className="team-area">
          <div className="row team-items" >

            {TeamData.map(item => {
              return (
                <div className="col-md-3 single-item " data-aos="fade-up">
                  <div className="item">
                    <div className="thumb">
                      <img className="img-fluid" src={item.image} alt="Thumb" />
                      <div className="overlay">
                        <h4>{item.name}</h4>
                        <p>
                          {item.bio}
                        </p>

                      </div>
                    </div>
                    <div className="info">
                      <span className="message">
                      <a href={`mailto:${item.email}`}><i className="fas fa-envelope-open"></i></a>
                      </span>
                      <h4>{item.name}</h4>
                      <span>{item.position}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </section>

      </div>

    </div>
  )
}

export default Team