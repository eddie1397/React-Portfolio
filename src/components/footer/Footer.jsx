import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>EDFUD</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#concept">Concepts</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Edfud Inc. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer