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
                <small>1 Year Software Engineer Working </small>
              </article>
            </div>
            <p>
              Hello there I'm Eva Li!  As an entry-level software engineer, <br />
              I am passionate about building robust and efficient software solutions. <br />
              With a strong foundation in Python, I am adept at leveraging its extensive libraries and frameworks to develop innovative applications. <br />
              I also have a growing expertise in front-end development, specifically in React and its framework. <br />
              With a curious mindset and a drive for continuous learning, I am excited to tackle new challenges and contribute to cutting-edge projects in the software development industry.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Connect!</a>
        </div>
      </div>
    </section>
  )
}

export default About
