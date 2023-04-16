import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/images/logo.png"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0);
    setClick(!click);
  };

  // Load the profile state from localStorage on component mount
  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
          // Store the profile state in localStorage
          localStorage.setItem('profile', JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
    // Remove the profile state from localStorage
    localStorage.removeItem('profile');
  };


  return (
    <>
      <div className="navbar">
        <div className="nav-phone">
          <div className="nav-logo">
            <NavLink to="/" className="logo-image" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

        </div>


        <ul className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={handleClick}  >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" className="nav-links" onClick={handleClick} >
              About
            </NavLink>
          </li>

          <li className="">
            <div className="nav-item">
              <button className="nav-dropbtn">
                <NavLink to="/team" className="nav-links" onClick={handleClick}>
                  Team <i className="fa fa-angle-down" aria-hidden="true"></i>
                </NavLink>
              </button>
              <div className="dropdown-content">
                <NavLink to="/team" className="drop-nav-links" onClick={handleClick}>
                  Current Team
                </NavLink>

                <NavLink to="/team/past-team" className="drop-nav-links" onClick={handleClick}>
                  Past Secretaries
                </NavLink>

              </div>
            </div>
          </li>

          <li className="nav-item">
            <NavLink
              to="/events" className="nav-links" onClick={handleClick} >
              Events
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/blogs" className="nav-links" onClick={handleClick} >
              Blogs
            </NavLink>
          </li>


          {profile && (
            <li>
              <div className="nav-item">
                <button className="nav-dropbtn">
                  <NavLink to="/material" className="nav-links" onClick={handleClick}>
                    Material <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </NavLink>
                </button>
                <div className="dropdown-content">
                  <NavLink to="/material/prep-mat" className="drop-nav-links" onClick={handleClick} >
                    PrepMat
                  </NavLink>
                
                  <NavLink to="/material/placement-talks" className="drop-nav-links" onClick={handleClick}>
                    Placement Talks Videos
                  </NavLink>

                </div>
              </div>
            </li>
          )}



          <li className="nav-item">
            <NavLink to="/clubs" className="nav-links" onClick={handleClick} >
              Clubs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" className="nav-links" onClick={handleClick} >
              Contact Us
            </NavLink>
          </li>


          <li className="nav-item">
            {profile ? (
              <div className='profile-img'>
                <img src={profile.picture} alt="user profile" onClick={logOut} />
                <div className="profile-data">
                  <p>Name: {profile.name}</p>
                  <p>Email: {profile.email}</p>
                  <p><button className="login-btn" onClick={logOut} >Logout</button></p>


                </div>

              </div>
            ) : (
              <button className="login-btn" onClick={() => login()}>Login In </button>
            )}
          </li>






        </ul>



      </div>
    </>

  )
}

export default Navbar