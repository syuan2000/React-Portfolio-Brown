import React from 'react';
import {BsLinkedin, BsGithub, BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/eva-li-5788ab1bb/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/syuan2000" target="_blank" rel="noreferrer" ><BsGithub /></a>
        <a href="https://www.youtube.com/channel/UCwxZEp3Z3vdeynIDWQGYbmA" target="_blank" rel="noreferrer"><BsYoutube /></a>
    </div>
  )
}

export default HeaderSocials