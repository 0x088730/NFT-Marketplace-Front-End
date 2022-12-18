import React from 'react'

const NFTBNBCard = ({NFTUrl, NFTName, ownerName, count, price, avatarUrl, usdPrice, time}) => {
  return (
    <div className='NFT-bnb-card'>
      <div className='NFT-img-block'>
        <img className='width-100' src={NFTUrl} alt=''></img>
        <div className='d-flex'>
          <div className='time-block'>
            <img className='clock-img' src='assets/images/clock.svg' alt=''></img> {time}
          </div>
        </div>
      </div>
      <div className='NFT-BNB-content'>
        <div className='NFT-title'>
          <div className='NFT-bnb-name'>{NFTName}</div>
          <div className='NFT-owner d-flex justify-content-between'>
            <div className='NFT-owner-info'>
              <img className='NFT-owner-img' src={avatarUrl} alt=''></img>
              <div className='NFT-owner-content align-center'>
                <div className='NFT-bnb-owner-name'>{ownerName}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='NFT-button-block d-flex justify-content-between'>
          <div className='NFT-bnb-price-block d-flex'>
            <div className='ETH-black-logo'>
              <img src='assets/images/ETH_logo_black.svg' height={24} alt=''></img>
            </div>
            <div className='current-bid-block'>
              <div className='current-bnb-price'>{price} BNB</div>
              <div className='usd-price'>$ {usdPrice}</div>
            </div>
          </div>
          <div>
            <div className='NFT-bnb-like align-center'>
              <i className="fa-solid fa-heart bnb-like-icon me-2"></i> {count}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTBNBCard;