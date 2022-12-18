import React, { useRef, useState } from 'react';
import TeamCard from './subcomponents/TeamCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1300 , min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 660 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 660, min: 0 },
    items: 1
  }
};

const MemberList = [
  {member_url: "assets/images/branden.jpeg", name: "Branden Althof", role: "Founder & CEO"},
  {member_url: "assets/images/adrian.png", name: "Adrian Swish", role: "CO-Founder"},
  {member_url: "assets/images/stacy.jpeg", name: "Stacy Lemus", role: "A&R LA"},
  {member_url: "", name: "Angela Rollins", role: "A&R NY"},
]

const TeamMember = () => {
  const ref = useRef(null);

  const goToPrevious = (e) => {
    ref.current?.previous();
  }

  const goToNext = (e) => {
    ref.current?.next();
  }

  return (
    <div className='aboutus-block section-spacing'>
      <div className='text-center'>
        <span className='section-tag main-font'><span className='section-tag-font'>Team Members</span></span>
        <div className='section-title main-font'>
          Meet Our Team!
        </div>
        <div className='section-title-caption our-collection-caption subtext-font'>
          Meet our Executives and A&Rs
        </div>
      </div>
      <div className='aboutus-content-section'>
        <div className='aboutus-content'>
          <div className='aboutus-carousel'>
            <Carousel
              ref={ref}
              swipeable={false}
              draggable={false}
              showDots={false}
              arrows={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {MemberList.map((item, index) => 
                <TeamCard 
                  key={index}
                  member_url={item.member_url}
                  name={item.name}
                  role={item.role}
                />
              )}
            </Carousel>
            <button 
              className='previous-btn member-arrow arrow-btn' 
              onClick={goToPrevious}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button 
              className='next-btn member-arrow arrow-btn' 
              onClick={goToNext}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className='partner-block main-font text-center'>
        <div className=''>
          <span className='partner-title'>
            We Are Partnered with Top Brands
          </span>
        </div>
        <div className='brand-block'>
          <img className='brand-image brand-usdc' src='assets/images/usdc.png' alt=''></img>
          <img className='brand-image brand-cardano' src='assets/images/cardano.png' alt=''></img>
          <img className='brand-image brand-ethereum' src='assets/images/ethereum.png' alt=''></img>
          <img className='brand-image brand-solana' src='assets/images/solana.png' alt=''></img>
          <img className='brand-image brand-mirror' src='assets/images/mirror.png' alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default TeamMember