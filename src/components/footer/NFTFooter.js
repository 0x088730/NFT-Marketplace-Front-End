import React from 'react'
import FooterNav from '../subcomponents/FooterNav'

const NFTFooter = () => {
  return (
    <div>
      <div className='section-block-block'>
        <div className='section-block mt-0'>
          <div className='nftfooter-section-title main-font'>
              We Curate From<br/>
              The<br/>
              Best Producers
          </div>
          <div className='nftfooter-mail-info subtext-font'>
            info@gotinstumentals.com
          </div>
          <div className='subscribe-email-block'>
            <div className='subscribe-email-title main-font'>Subscribe And Get News</div>
            <div className='subscribe-input'>
              <input className='email-block email-subscribe' type='email' placeholder='@email.com'/>
              <label className='float-label'>Email</label>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-nav-section'>
        <FooterNav/>
      </div>
    </div>
  )
}

export default NFTFooter