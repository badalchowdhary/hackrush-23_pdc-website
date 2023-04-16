import React from "react";
import { Helmet } from 'react-helmet';
import ImageCarousel from "../components/ImageCarousel";
import { Link } from "react-router-dom";
const Home = () => {


  return (
    <div className='main-container'>
      <Helmet>
        <title>PDC | IIT Gandhinagar</title>
        <meta name="description" content="Professional Development Council (PDC) is dedicated to providing the student body with a structured framework for their overall professional development. We aim to spread awareness about the importance of professional development and create avenues for students to enhance their skills and knowledge in various areas." />

      </Helmet>


      <header id="head">
        <div className="banner-content">
          <h1>Professional Development Council</h1>
        </div>
      </header>

      <div className="page-container">

        <div className="page-section">
          <div className="about-content">
            <div className="section-heading">
              <h2>Professional Development Council</h2>
            </div>

            <p>Our mission is to provide the student body with a structured framework for their overall professional development. We work towards spreading awareness about the importance of professional skill development and creating avenues for students to enhance their career prospects. Our principles are based on assessing the current performance of IITGN students in professional aspects and creating a platform for improvement. We also strive to promote a healthy culture of professional skill development among our students. Additionally, we act as a communication medium between the <strong> Career Development Services (CDS)</strong> and the student body, facilitating feedback from companies to students and addressing student concerns with the CDS. Join us in your journey towards a successful and fulfilling professional career!</p>


          </div>
        </div>



        <div className="section-heading">

        </div>

        <div className="announcements">
          <h2>Announcements <i class="fa fa-bullhorn" aria-hidden="true"></i></h2>
          <ImageCarousel />
          <div className="announcements-btn">
          <a href='https://iitgn.ac.in/' target='_blank' rel="noreferrer">
            <Link to="/events"><button className='read-button' onClick={() => window.scrollTo(0, 0)}>Read More</button></Link></a>

          </div>
          

        </div>






      </div>




    </div>
  )
}

export default Home