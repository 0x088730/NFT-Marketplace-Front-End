import React from 'react'
import FooterNav from '../subcomponents/FooterNav'

const Footer = () => {
  return (
    <div className='footer text-center'>
      <div className='section-title main-font'>
        Join Our Newsletters
      </div>
      <div className='section-title-caption our-collection-caption subtext-font'>
        Stay in the loop on feature releases, events, and announcements
      </div>
      <input className='email-block' type='email' placeholder='Your email'/>
      <div className='text-center d-flex justify-content-center'>
        <div className='view-more'>
          <button className='view-more-btn main-font subscribe-btn'>Subscribe</button>
        </div>
      </div>
      <div className='footer-nav-section'>
        <FooterNav/>
      </div>
    </div>
  )
}

export default Footer