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
                <small>1 Year Software Engineer Working </small>
              </article>
              <article className='about__card'>
                <TfiFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>React Web Application </small>
              </article>
            </div>
            <p>
              Hi, I'm Eva Li!
        I'm a software engineer who loves building tools that are both helpful and enjoyable to use.<br />
        I have a solid background in Python and enjoy using it to bring ideas to life <br />
          — whether it’s automating something or building smart backend systems.
        On the front end, I’m diving deeper into React and love the process of turning designs into smooth, user-friendly experiences. <br />
        I’m always curious, eager to learn, and excited to work on projects that make a real difference for people (including me :)
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
