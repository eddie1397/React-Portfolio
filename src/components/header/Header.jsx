import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


// Start HERE

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm </h5>
        <h1>Edward Binion Jr.</h1>
        <h5 className="text-light">Software Engineer and Photographer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header