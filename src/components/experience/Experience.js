import React from 'react';
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div class="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>React.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
          </div>
        </div>
        <div class="experience__backend">
        <h3>Backend & Cloud Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>C#</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details_icon'/>
              <div>
                <h4>AWS (Lambda, S3, EC2, Load Balancer)</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
