import React from 'react'
import SpecialityBox from './subcomponents/SpecialityBox';

const BoxList = [
  {icon_url: "assets/images/instrument.svg", title: "List Your Instrumental", content: "List your instrumental NFT on our marketplace", number: "01"},
  {icon_url: "assets/images/access_token.svg", title: "Access The Got Token", content: "Access The Got Token To Start Tipping and Earning Rewards Today", number: "02"},
  {icon_url: "assets/images/royalty_reward.svg", title: "Receive Royalty Rewards", content: "Earn Royalty Rewards By Listening To Instrumentals", number: "03"},
  {icon_url: "assets/images/gathering.svg", title: "Gathering of top producers.", content: "Join our network of top producers for collabs, events, and more. ", number: "04"},
]

const OurSpeciality = () => {
  return (
    <div className='section-block-block'>
      <div className='section-block section-spacing'>
        <div className='text-center'>
          <span className='section-tag main-font'><span className='section-tag-font'>Our Speciality</span></span>
          <div className='section-title main-font'>
            For Producers
          </div>
          <div className='section-title-caption subtext-font'>
            See perks of being a producer on our<br/> Platform.
          </div>
        </div>
        <div className='row d-flex'>
          {BoxList.map((box, index) =>
            <div className='col-xl-3 col-lg-3 col-md-6 px-0 our-speciality-content' key={index}>
              <SpecialityBox
                icon_url={box.icon_url}
                title={box.title}
                content={box.content}
                number={box.number}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OurSpeciality;