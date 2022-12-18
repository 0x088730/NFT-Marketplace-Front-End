import React from 'react'

const SpecialityBox = ({title, content, icon_url, number}) => {
  return (
    <div className='speciality-box  text-center'>
      <img className='speciality-box-icon' src={icon_url} alt=""></img>
      <div className='speciality-box-content'>
        <div>
          <div className='box-content-title main-font'>
            {title}
          </div>
          <div className='box-content-text subtext-font'>
            {content}
          </div>
        </div>
        <div className='speciality-box-number main-font'>{number}</div>
      </div>
    </div>
  )
}

export default SpecialityBox;