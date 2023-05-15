import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import profile from '../../assets/images/profile2.png'

const Header = () => {

  return (
    <header>
      <div class="container header__container">
        <h5>
          Hello I'm 
        </h5>
        <h1>Eva Li</h1>
        <h5 class="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={profile} alt="me" style={{width:'50%'}} className='me_image'/>
        </div>
      </div>
    </header>
  )
}

export default Header