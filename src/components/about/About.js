import React from 'react'
import aboutme from '../../assets/images/designer.png'
import {TfiFolder} from 'react-icons/tfi';
import {MdOutlineComputer} from 'react-icons/md';
import {IoSchoolOutline} from 'react-icons/io5'

import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={aboutme} alt="About Image" />
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
              leifjoij pweoifjpaowejfoawjef.f ejwifoa jfiewofj ofi.
            </p>
            <a href="contact" className='btn btn-primary'>Let's Connect!</a>
        </div>
      </div>
    </section>
  )
}

export default About