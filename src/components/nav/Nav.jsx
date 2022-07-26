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




function Nav() {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#portfolio"><BsCodeSlash /></a>
      <a href="#concept"><MdOutlineDesignServices /></a>
      <a href="#contact"><TbMessageCircle /></a>

    </nav>
  )
}

export default Nav