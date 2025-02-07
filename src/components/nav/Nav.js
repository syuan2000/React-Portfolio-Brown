import React, {useState} from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai';
import {MdWorkOutline} from 'react-icons/md'

const Nav = () => {
  const [active, setActive] = useState('#');

  return (
    <nav>
      <a href="#" role="button" className={active==='#'? 'active': ''} onClick={()=>setActive('#')}><AiOutlineHome /></a>
      <a href="#about" className={active==='#about'? 'active': ''} onClick={()=>setActive('#about')}><AiOutlineUser /></a>
      <a href="#experience" className={active==='#experience'? 'active': ''} onClick={()=>setActive('#experience')}><MdWorkOutline /></a>
      <a href="#contact" className={active==='#contact'? 'active': ''} onClick={()=>setActive('#contact')}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav