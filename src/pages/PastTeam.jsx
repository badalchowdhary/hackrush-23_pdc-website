import React,{useEffect} from "react";
import { PastTeamData } from "../data/PastTeamData";
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css';

const PastTeam = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Helmet>
                <title>Team | Past Team</title>
                <meta name="description" content="" />

            </Helmet>
        <header id="page-header">
        <div className="page-heading">
          <h2>Past Secretaries</h2>
        </div>
      </header>

      <div className="page-container">

        <section id="team" className="team-area">
          <div className="row team-items">

            {PastTeamData.map(item => {
              return (
                <div className="col-md-3 single-item" data-aos="fade-up">
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
                      <a href={item.linkedin} target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a>
                      </span>
                      <h4>{item.name}</h4>
                      <span>{item.year}</span>
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

export default PastTeam