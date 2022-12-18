import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CollectionCard from "./subcomponents/CollectionCard";

const CollectionList = [
  { collection_url: "assets/images/down_south.png", btn_name: "Down South" },
  { collection_url: "assets/images/hip_hop.png", btn_name: "Hip Hop" },
  { collection_url: "assets/images/trap.png", btn_name: "Trap" },
  { collection_url: "assets/images/rap.png", btn_name: "Rap" },
  { collection_url: "assets/images/east_coast.png", btn_name: "East Coast" },
  { collection_url: "assets/images/trap.png", btn_name: "Trap" },
  { collection_url: "assets/images/rap.png", btn_name: "Rap" }
];

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
    breakpoint: { max: 1024, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};

const OurCollection = () => {
  const ref = useRef(null);

  const goToPrevious = e => {
    e.preventDefault();
    // if (pageIndex === 0){
    //   setPageIndex(0);
    // } else {
    //   setPageIndex(index => index - 1);
    //   ref.current?.goToSlide(pageIndex - 1);
    // }
    ref.current?.previous();
  };

  const goToNext = e => {
    // e.preventDefault();
    // if (pageIndex > CollectionList.length) {
    //   setPageIndex(CollectionList.length)
    // } else {
    //   setPageIndex(index => index + 1);
    //   ref.current?.goToSlide(pageIndex + 1);
    // }
    ref.current?.next();
  };

  return (
    <div className="section-block section-spacing">
      <div className="text-center">
        <span className="section-tag main-font">
          <span className="section-tag-font">Our Speciality</span>
        </span>
        <div className="section-title main-font">
          Explore our new collection
        </div>
        <div className="section-title-caption our-collection-caption subtext-font">
          The best exclusive collection from our Producers.
        </div>
      </div>
      <div className="collection-carousel">
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
          {CollectionList.map((item, index) => (
            <CollectionCard
              key={index}
              collection_url={item.collection_url}
              btn_name={item.btn_name}
            />
          ))}
        </Carousel>
        <div className='collection-carousel-arrows d-flex justify-content-between'>
          <button
            className="arrow-btn"
            // disabled={pageIndex===0}
            onClick={goToPrevious}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            className="arrow-btn"
            // disabled={pageIndex===CollectionList.length}
            onClick={goToNext}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
