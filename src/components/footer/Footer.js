import React from 'react';
import {BsLinkedin, BsGithub, BsYoutube} from 'react-icons/bs'
import './footer.css';

const Footer = () => {
  return (
    <footer>

      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="footer_socials">
        <a href="https://www.linkedin.com/in/eva-li-5788ab1bb/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/syuan2000" target="_blank" rel="noreferrer" ><BsGithub /></a>
        <a href="https://www.youtube.com/channel/UCwxZEp3Z3vdeynIDWQGYbmA" target="_blank" rel="noreferrer"><BsYoutube /></a>
      </div>
    </footer>
  )
}

export default Footer