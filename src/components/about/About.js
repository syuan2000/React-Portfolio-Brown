import React from 'react'
import aboutme from '../../assets/images/designer.png'
import {TfiFolder} from 'react-icons/tfi';
import {MdOutlineComputer} from 'react-icons/md';
import {IoSchoolOutline} from 'react-icons/io5';
import TrackVisibility from 'react-on-screen';
import 'animate.css'
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <TrackVisibility>
              {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={aboutme} alt="About Image"/>
              }
              </TrackVisibility>
          </div>
          
        </div>
        <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <IoSchoolOutline className='about__icon'/>
                <h5>Education</h5>
                <small>Bachelor of Information Technology </small>
              </article>
              <article className='about__card'>
                <MdOutlineComputer className='about__icon'/>
                <h5>Experience</h5>
                <small>2 Year Software Engineer Working </small>
              </article>
              <article className='about__card'>
                <TfiFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>React Web Application </small>
              </article>
            </div>
            <p>
        Hi, I'm Eva Li! I'm a full-stack software engineer with experience building scalable systems end-to-end, but what I really enjoy most is shaping the client experience.
  I love using React to turn ideas and designs into intuitive, user-centered products that feel smooth and enjoyable to use.
On the backend, I’ve worked with Python, .NET, and AWS to design APIs, streamline data flows, and optimize performance. <br />
I’m always eager to grow and learn, and excited about products that combine creative thoughtful engineering with meaningful impact : )
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
