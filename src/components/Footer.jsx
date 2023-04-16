import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import logo from "../assets/images/IITGN Logo-Trans.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 ">
            
          </div>
          <div className="footer-content pt-5 pb-1">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html"><img src={logo} className="img-fluid" alt="logo" /></a>
                  </div>
                  <div className="footer-text">
                    <p>The Professional Development Council (PDC) is dedicated to providing the student body with a structured framework for their overall professional development. We aim to spread awareness about the importance of professional development and create avenues for students to enhance their skills and knowledge in various areas. </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <ul className="social_icon">
                      <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="https://www.instagram.com/"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="https://www.instagram.com/"><i className="fab fa-youtube"></i></a></li>
                      <li><a href="https://www.instagram.com/"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
                    <li><Link to="/events" onClick={() => window.scrollTo(0, 0)}>Events</Link></li>
                    {/* <li><Link to="/material/placement-talks" onClick={() => window.scrollTo(0, 0)}>Placement Talks Videos</Link></li> */}
                    <li><Link to="/blogs" onClick={() => window.scrollTo(0, 0)}>Blogs</Link></li>
                    <li><Link to="/clubs" onClick={() => window.scrollTo(0, 0)}>Clubs</Link></li>
                    <li><Link to="/team" onClick={() => window.scrollTo(0, 0)}>Our Team</Link></li>
                    <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><i className="fab fa-telegram-plane"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023, All Right Reserved <Link to="/" onClick={() => window.scrollTo(0, 0)}>Professional Development Council</Link></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Terms</Link></li>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Privacy</Link></li>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Policy</Link></li>
                    <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer