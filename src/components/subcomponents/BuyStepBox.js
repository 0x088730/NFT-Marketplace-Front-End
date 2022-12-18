import React from 'react'

const BuyStepBox = ({icon_url, title, content, step}) => {
  return (
    <div className='buy-box d-flex'>
      <div className='buy-step-icon'>
        <img src={icon_url} alt=''></img>
      </div>
      <div className='buy-box-content'>
        <div className='box-content-title main-font'>
          {title}
        </div>
        <div className='box-content-text subtext-font'>
          {content}
        </div>
      </div>
      <div className='buy-step d-flex'>
        <div className='buy-step-font main-font'>
          {step}
        </div>
      </div>
    </div>
  )
}

export default BuyStepBox;