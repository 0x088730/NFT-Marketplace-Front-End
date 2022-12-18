import React from 'react'

const Hero = () => {
  return (
    <div className='row'>
      <div className='col-md-6 align-center'>
        <div className='hero-content'>
          <div className='hero-content-title main-font'>
            The Hottest Instrumentals in the &nbsp;
            <span className='universe-text'>Universe & Metaverse</span>
          </div>
          <div className='hero-content-text subtext-font'>
            GOT Instrumentals is the premier marketplace for the world’s best curated instrumental collection, which are digital items you can truly own for yourself
          </div>
          <div className='d-flex'>
            <div className='enter-exchange'>
              <button className='enter-exchange-btn main-font'>Enter Exchange</button>
            </div>
          </div>
          <div className='hero-payment-section'>
            <div className='hero-payment-section-title main-font'>
              We offer a multipayment solution
            </div>
            <img className='payment-solution-img' src='assets/images/pay_solution.svg' width={300}></img>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <img className='width-100' src='assets/images/hero_question.png'></img>
      </div>
    </div>
  )
}

export default Hero