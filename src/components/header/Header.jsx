import React from 'react'
import './header.css'
import CTA from './CTA'


// Start HERE

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm </h5>
        <h1>Edward Binion Jr.</h1>
        <h5 className="text-light">Software Engineer and Photographer</h5>
        <CTA />

      </div>
    </header>
  )
}

export default Header