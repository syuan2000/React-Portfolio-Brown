import React from 'react';
import resume from '../../assets/files/Wei_Syuan_Li_resume_2023.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={resume} className='btn' download>Download Resume</a>
        <a href="#contact" className='btn  btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA