import React from 'react'
import BuyStepBox from './subcomponents/BuyStepBox'

const BuyList = [
  {icon_url: "assets/images/buy_step1.svg", title: "Choose Your NFT", content: "Explore through our collection of curated instrumentals", step: "step1"},
  {icon_url: "assets/images/buy_step2.svg", title: "Choose Your Payment Method ", content: "Use your Credit/Debit Card or Crypto to purchase our NFTs. You must have a Wallet to purchase using Crypto.", step: "step2"},
  {icon_url: "assets/images/buy_step3.svg", title: "Mint Your NFT", content: "View your NFT in your Profile or you can View it in your DeFi wallet if you used Crypto to purchase your NFT. ", step: "step3"},
  {icon_url: "assets/images/buy_step4.svg", title: "Sell your NFT", content: "Resell your NFTs by listing them for sale on our Exchange. ", step: "step4"},
]

const BuyCollection = () => {
  return (
    <div className='section-block-block'>
      <div className='section-block section-spacing'>
        <div className='text-center'>
          <span className='section-tag main-font'><span className='section-tag-font'>Explore Our Collection</span></span>
          <div className='section-title main-font'>
            How To Buy Our Instrumentals
          </div>
        </div>
        <div className='row d-flex buy-content'>
          <div className='col-lg-6 col-md-12'>
            {BuyList.map((step, index) =>
              <BuyStepBox
                key={index}
                icon_url={step.icon_url}
                title={step.title}
                content={step.content}
                step={step.step}
              />
            )}
          </div>
          <div className='col-lg-6 col-md-12 d-flex justify-content-center align-center'>
            <img className='width-100' src='assets/images/instrumental.png' alt=''></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyCollection;