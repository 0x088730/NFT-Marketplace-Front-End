import React from 'react'

const ProducerCarouselItem = ({name, price, img_url}) => {
  return (
    <>
      <div className='producer-carousel-item text-center'>
        <img className='produced-img width-100' src={img_url? img_url:'assets/images/producer_bingo.png'} alt=""></img>
        <img className='produced-check-img' src='assets/images/producer_check.png' alt=''></img>
      </div>
      <div className='produced-img-content'>
          <div className='text-center'>
            <div className='producer-name'>
                {name}
            </div>
            <div className='produced-item-price subtext-font'>
                {price} ETH
            </div>
          </div>
      </div>
    </>
  )
}

export default ProducerCarouselItem;