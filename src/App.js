import React, { useState, useEffect } from 'react';
import './App.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdExplore } from 'react-icons/md';
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { GiLightBulb } from "react-icons/gi";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhone, FaLinkedin, FaYoutube,} from "react-icons/fa6";
import { PiChalkboardTeacher, PiUsersFour } from "react-icons/pi";
import { MdOutlineEventNote } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import slide1 from './images/slide1.png';
import slide2 from './images/slide2.png';
import slide3 from './images/slide3.png';
import Surajit from './images/Surajit.jpg';
import Priyanka from './images/Priyanka.jpg';
import Sayak from './images/Sayak.jpg';
import Debjit from './images/Debjit.jpg';
import Abir from './images/Abir.png';
import KM_Sir from './images/KM_Sir.jpg';
import logo from './images/Logo.png'

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const slides = [
    {
      src: slide1,
      label: "Learn new things",
      label1: "To explore daily",
      caption: "Get free access to different tech contents",
      caption1: "from top nationwide professionals."
    },
    {
      src: slide2,
      label: "Join weekly tasks",
      label1: "To stand out ",
      caption: "Complete weekly tasks to be a standout performer."
    },
    {
      src: slide3,
      label: "Read daily blogs &",
      label1: "Keep in touch",
      caption: "Give a shoutout to the daily newsfeeds &.",
      caption1: "get a chance to be a member of our community."
    }
  ];

  const slides2 = [
    {
      title: "A Proud Leader",
      testimony: "Serving as the Chairperson of the Computer Society of India BCREC was an enriching experience. It honed my leadership skills, deepened my passion for technology and I am proud to have been part of a team that fostered innovation and learning.",
      imgSrc: Surajit,
      name: "Surajit Bhattacharyya",
      role: "Ex-Chairperson",

      title1: "Enriching Journey",
      testimony1: "CSI, a professional body committed to the advancement of Information Technology, can be a pivotal part of your academic journey. It offers numerous opportunities for skill enhancement through engaging competitions and projects.",
      imgSrc1: Priyanka,
      name1: "Priyanka Roy",
      role1: "Ex-Secretary",

      title2: "A Transformative Experience",
      testimony2: "Being the Treasurer of the Computer Society of India BCREC  was a truly transformative experience. Through its diverse range of skill-building opportunities and project management, I enhanced my technical abilities and I grew in confidence.",
      imgSrc2: Sayak,
      name2: "Sayak Rudra",
      role2: "Ex-Treasurer",

    },
    {
      title: "Testimony Coming Soon!",
      testimony: "",
      imgSrc: '',
      name: "",
      role: "",
      
      title1: "Testimony Coming Soon!",
      testimony1: "",
      imgSrc1: '',
      name1: "",
      role1: "",

      title2: "Testimony Coming Soon!",
      testimony2: "",
      imgSrc2: '',
      name2: "",
      role2: "",
    },
    {
      title: "Testimony Coming Soon!",
      testimony: "",
      imgSrc: '',
      name: "",
      role: "",
      
      title1: "Testimony Coming Soon!",
      testimony1: "",
      imgSrc1: '',
      name1: "",
      role1: "",

      title2: "Testimony Coming Soon!",
      testimony2: "",
      imgSrc2: '',
      name2: "",
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev2 = () => {
    setActiveIndex2((prevIndex) => (prevIndex === 0 ? slides2.length - 1 : prevIndex - 1));
  };

  const handleNext2 = () => {
    setActiveIndex2((prevIndex) => (prevIndex === slides2.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClick = () => {
    setClicked(!clicked);
  };
 
  
  const handlePlay = () => {
    const video = document.getElementById('exampleVideo');
    if (video) {
      video.play();
      setIsPlaying(true);
      video.controls = true;
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.location.href = "#home"; // Navigate to the home section
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      if (window.scrollY > 200) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">

      {/* Header Section */}
      <header className={`navbar ${navbarVisible ? 'navbar-visible' : ''}`}>
        <div className="logo">
          <img src= {logo} alt="Logo" />
          <h3>CSI BCREC</h3>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Contests</a></li>
            <li><a href="#ourteam">Our Team</a></li>
            <li><a href="#second-carousel">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="close-menu" onClick={closeMenu}>
            <FaTimes size={25} />
          </div>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars size={25} />
        </div>
      </header>
      <div className="carousel" id='home'>
        <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            >
              <img src={slide.src} alt={slide.label} />
              <div className="carousel-caption">
                <h1>Technology for Masses!</h1>
                <h3>{slide.label}</h3>
                <h2>{slide.label1}</h2>
                <div className='headlines'>
                  <p>{slide.caption}</p>
                  <p>{slide.caption1}</p>
                </div>
                <button onClick={handleClick} className={clicked ? 'clicked' : ''}>
                  DISCOVER MORE
                  <MdExplore className="discover" size={25} style={{ marginTop: "-2px", position: 'absolute', paddingLeft: "5px" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrev}>
            <IoIosArrowBack size={30} />
          </button>
          <button className="carousel-button" onClick={handleNext}>
            <IoIosArrowForward size={30} />
          </button>
        </div>
      </div>


      {/* Intro Section */}
      <section className="box-section">
        <div className="box">
          <GiLightBulb size={80} className='icon' />
          <div className='box-caption'>
            <h4>Learn Skills</h4>
            <h3>with unlimited contests</h3>
          </div>
        </div>
        <div className="box">
          <LiaChalkboardTeacherSolid size={80} className='icon' />
          <div className='box-caption'>
            <h4>Expert Teachers</h4>
            <h3>best & highly qualified</h3>
          </div>
        </div>
        <div className="box">
          <GrCertificate size={80} className='icon' />
          <div className='box-caption'>
            <h4>Certificates</h4>
            <h3>value all over India</h3>
          </div>
        </div>
      </section>


      {/* Testimony Section */}
      <div className="carousel" id='second-carousel'>
        <h4>Our Testimonials</h4>
        <h3>What They Say?</h3>
        <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex2 * 100}%)` }}>
          {slides2.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex2 ? 'active' : ''}`}
            >
              <center>
                <div className="carousel-boxes">
                  <div className="carousel-box">
                      <p>{slide.title}</p>
                      <p className='testimony'>{slide.testimony}</p>
                    <div className='testimonial'>
                      <img src={slide.imgSrc} alt={slide.name} />
                      <div className='testimonial-caption'>
                        <h4>{slide.name}</h4>
                        <h3>{slide.role}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-box">
                    <p>{slide.title1}</p>
                    <p className='testimony'>{slide.testimony1}</p>
                    <div className='testimonial'>
                      <img src={slide.imgSrc1} alt={slide.name1} />
                      <div className='testimonial-caption'>
                        <h4>{slide.name1}</h4>
                        <h3>{slide.role1}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-box">
                    <p>{slide.title2}</p>
                    <p className='testimony'>{slide.testimony2}</p>
                    <div className='testimonial'>
                      <img src={slide.imgSrc2} alt={slide.name2} />
                      <div className='testimonial-caption'>
                        <h4>{slide.name2}</h4>
                        <h3>{slide.role2}</h3>
                      </div>
                    </div>
                  </div>
                  {/* Add more boxes here if needed */}
                </div>
              </center>
            </div>
          ))}
        </div>
        <div className="carousel-buttons bottom-center">
          <button className="carousel-button" onClick={handlePrev2}>
            <MdOutlineRadioButtonChecked size={30} />
          </button>
          <button className="carousel-button" onClick={handleNext2}>
            <MdOutlineRadioButtonChecked size={30} />
          </button>
        </div>
      </div>

      {/* Professor Section */}
      <div className='teacher'>
        <p>Tech Talks</p>
        <h4>Professor's Corner</h4>
        <center>
          <div className='teacher-section'>
            <div className='teacher-details'>
              <center>
                <img src = {KM_Sir} alt = "name" />
                <div className='back'></div>
              </center>
            </div>
            <h3>" This section is dedicated to the teacher to speak on some technical features related to the association which is to be added later including his own thoughts, mission, vission & retrospection on CSI BCREC."</h3>
          </div>
        </center>
      </div>

      {/* Video Section */}
      <div className='video-section'>
        <center>
          <div className='video-container'>
            <video id='exampleVideo' 
            onClick={handlePlay}
            controls={!isPlaying}>
              <source src = "https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className='play-button' onClick={handlePlay}>
                <FaGooglePlay />
              </div>
            )}
          </div>
          <center>
            <div className='record-section'>
              <div className='record-text'>
                <h3>Our Mission Is To</h3>
                <h4>Make Profession An Area Of</h4>
                <h4 className='record-caption'>Choice Among All Sections Of Society</h4>
              </div>
              <div className='records'>
                <PiUsersFour size={80} className='icon'/>
                <div>
                  <h2>150+</h2>
                  <h3>Active Members</h3>
                </div>
              </div>
              <div className='records'>
                <PiChalkboardTeacher size={80} className='icon'/>
                <div>
                  <h2>20+</h2>
                  <h3>Active Faculty</h3>
                </div>
              </div>
              <div className='records'>
                <MdOutlineEventNote size={80} className='icon'/>
                <div>
                  <h2>10+</h2>
                  <h3>Annual Contests</h3>
                </div>
              </div>
            </div>
          </center>
        </center>
      </div>

      {/* Team Section */}
      <div className='team'>
        <p>Meet Our Team</p>
        <h4>Member's Association</h4>
        <center>
          <div className='team-box'>
            <div className='member'>
              <img src = {Abir} alt = "name" />
              <div>
                <h2>Abir Mukherjee</h2>
                <h3>Undergraduate Student</h3>
              </div>
              <div>
                <h4>Chairperson</h4>
                <p>Department of AIML (CSE)</p>
              </div>
            </div>
            <div className='member'>
              <img src = {Debjit} alt = "name" />
              <div>
                <h2>Debjit Bakshi</h2>
                <h3>Undergraduate Student</h3>
              </div>
              <div>
                <h4>Vice-Chairperson</h4>
                <p>Department of Information Technology</p>
              </div>
            </div>
            <div className='member'>
              <img src = "https://i.postimg.cc/CLz4W2Bj/Whats-App-Image-2024-05-05-at-12-24-45-48b18bab.jpg" alt = "name" />
              <div>
                <h2>Anish Rudra</h2>
                <h3>Undergraduate Student</h3>
              </div>
              <div>
                <h4>Secretary</h4>
                <p>Department of Information Technology</p>
              </div>
            </div>
            <div className='member'>
              <img src = "https://i.postimg.cc/CLz4W2Bj/Whats-App-Image-2024-05-05-at-12-24-45-48b18bab.jpg" alt = "name" />
              <div>
                <h2>Kuntal Banerjee</h2>
                <h3>Undergraduate Student</h3>
              </div>
              <div>
                <h4>Treasurer</h4>
                <p>Department of Information Technology</p>
              </div>
            </div>
          </div>
        </center>
      </div>

      {/* Footer */}
      <div className='footer'> 
          <center>
            <div className='contact'> 
              <h1>Subscribe To Our Newsletter To Get Daily Content!</h1>
              <div className='mailing'>
                <input placeholder='Enter your email'></input>
                <IoIosMail size={45} className='icon'/>
              </div>
            </div>
          </center>
          <div className='social-media'>
              <h1>CSI BCREC</h1>
              <div>
                <h2>Courses</h2>
                <p>UI/UX Design</p>
                <p>Business Strategy</p>
                <p>Web Development</p>
                <p>Progamming Concepts</p>
                <p>Software Development</p>
              </div>
              <div>
                <h2>Contact</h2>
                <p>Dr. B C Roy Engineering College, Durgapur</p>
                <p><IoLocation size={28}/> Fuljore More, Durgapur, West Bengal, India</p>
                <p><IoIosMail size={28}/> csiofficial@bcrec.ac.in</p>
                <p><FaPhone />  +91-8859963680</p>
              </div>
              <div className='social-icons'>
                <div className='media'><center><FaFacebook size={35} className='icon'/></center></div>
                <div className='media'><center><FaLinkedin size={35} className='icon'/></center></div>
                <div className='media'><center><FaYoutube size={35} className='icon'/></center></div>
              </div>
          </div>
          <div className='copyright'>
            <p>@ All rights reserved 2021 by csi@bcrec.ac.in</p>
          </div>
      </div>
      {scrollTopVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
  );
}

export default App;
