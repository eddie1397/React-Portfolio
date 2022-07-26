import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsCamera2} from 'react-icons/bs'
import {BsCodeSlash} from 'react-icons/bs'
import {MdOutlineDesignServices} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessageCircle} from 'react-icons/tb'
import {useState} from 'react'




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active': ''}><BiBook /></a>
      {/* <a href="#services" onClick={() =>setActiveNav('#services')} className={activeNav==='#services' ? 'active': ''}><RiServiceLine /></a> */}
      <a href="#portfolio" onClick={() =>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active': ''}><BsCodeSlash /></a>
      {/* <a href="#concept" onClick={() =>setActiveNav('#concept')} className={activeNav==='#concept' ? 'active': ''}><MdOutlineDesignServices /></a> */}
      <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}><TbMessageCircle /></a>

    </nav>
  )
}

export default Nav