import React, { useRef, useState } from 'react';
import NFTCard from './subcomponents/NFTCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1150, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};

const NFTList = [
  {NFTUrl: "assets/images/forever.png", NFTName: "Forever", ownerName: "eazy Renegrade", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/major1.png", NFTName: "Major", ownerName: "Roger Herwitz", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/shining.png", NFTName: "Forever", ownerName: "Roger Herwitz", count: "3432", price: "0.45", btnText: "Place Bid"}
]

const Aboutus = () => {
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
        <span className='section-tag main-font'><span className='section-tag-font'>About us</span></span>
        <div className='section-title main-font'>
          We Curate From The<br/> Best Producers 
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
              {NFTList.map((item, index) => 
                <NFTCard 
                  key={index}
                  NFTUrl={item.NFTUrl}
                  NFTName={item.NFTName}
                  ownerName={item.ownerName}
                  count={item.count}
                  price={item.price}
                  btnText={item.btnText}
                />
              )}
            </Carousel>
            <button 
              className='previous-btn arrow-btn' 
              onClick={goToPrevious}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button 
              className='next-btn arrow-btn' 
              onClick={goToNext}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
          <div className='aboutus-caption subtext-font text-center'>
            Got Instrumentals is a global online beat marketplace and platform
            made for independent music producers. More than 400,000 users from 102
            countries rely on Got Instrumentals to buy and sell beats. Got
            Instrumentals producers have landed top placements with artists that
            include Lil Wayne, Jadakiss, 50 Cent, Meek Mill, Fabolous and more.
            We’re a global community of creators working together to redefine the
            music industry.
          </div>
          <div className='text-center d-flex justify-content-center'>
            <div className='view-more'>
              <button className='view-more-btn main-font'>More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus