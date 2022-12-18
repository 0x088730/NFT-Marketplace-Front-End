import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProducerCarouselItem from './subcomponents/ProducerCarouselItem';

const ProducedList = [
  {collection_url: "", name: "Jahlil Beats", price: "21402"},
  {collection_url: "", name: "Reazy Renegade", price: "205.43"},
  {collection_url: "", name: "DBans", price: "170.3"},
  {collection_url: "", name: "Neezy N.E.B.", price: "120.7"},
  {collection_url: "", name: "Andy Hurlbutt", price: "82.19"},
  {collection_url: "", name: "Blake Banks", price: ""},
  {collection_url: "", name: "Monica Lucas", price: "52.8"},
  {collection_url: "", name: "Matt Ramos", price: "38.4"},
  {collection_url: "", name: "Harper Wilcher", price: "29.2"},
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1500 },
    items: 9
  },
  desktop: {
    breakpoint: { max: 1500, min: 1100 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1100, min: 768 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 768, min: 450 },
    items: 3
  },
  minimobile: {
    breakpoint: { max: 450, min: 0 },
    items: 2
  }
};

const ProducerCarousel = () => {
  const ref = useRef(null);

  const goToPrevious = (e) => {
    ref.current?.previous();
  }

  const goToNext = (e) => {
    ref.current?.next();
  }

  return (
    <div className='producer-carousel'>
      <div className='producer-carousel-title'>Top Producers</div>
      <div className='producer-carousel-content'>
        <Carousel
          ref={ref}
          swipeable={false}
          draggable={false}
          showDots={true}
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
          {ProducedList.map((item, index) => 
            <ProducerCarouselItem 
              key={index}
              img_url={item.collection_url}
              name={item.name}
              price={item.price}
            />
          )}
        </Carousel>
        <div className='produce-arrow-block'>
          <button 
            className='produce-arrow produce-previous' 
            onClick={goToPrevious}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button 
            className='produce-arrow produce-next' 
            onClick={goToNext}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProducerCarousel;