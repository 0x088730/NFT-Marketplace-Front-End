import React from 'react'

const NFTCard = ({NFTUrl, NFTName, ownerName, count, price, btnText, time}) => {
  return (
    <div className='NFT-card'>
      <div className='NFT-img'>
        <img className='width-100' src={NFTUrl} alt=''></img>
      </div>
      <div className='NFT-content'>
        <div className='NFT-title'>
          <div className='NFT-name main-font'>{NFTName}</div>
          <div className='NFT-owner d-flex justify-content-between'>
            <div className='NFT-owner-info'>
              <div className='NFT-owner-img'></div>
              <div className='NFT-owner-content'>
                <div className='NFT-producedby subtext-font'>Produced by</div>
                <div className='NFT-owner-name main-font'>{ownerName}</div>
              </div>
            </div>
            <div className='NFT-like'>
              <i className="far fa-heart nft-like-icon"></i>
              <div className='NFT-like-count subtext-font'>{count}</div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='NFT-button-block d-flex justify-content-between'>
          <div className='NFT-price-block d-flex'>
            <div className='ETH-logo align-center'>
              <img src='assets/images/ETH_logo.svg' width={20} alt=''></img>
            </div>
            <div className='current-bid-block'>
              <div className='current-bid'>Current Bid</div>
              <div className='current-bid-price main-font'>{price} ETH</div>
            </div>
          </div>
          <div className='NFT-buy-button'>{btnText}</div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard;