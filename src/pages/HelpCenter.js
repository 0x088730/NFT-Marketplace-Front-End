import React, { useState } from "react";
import clsx from "clsx";
import { Link } from 'react-router-dom'
import Footer from "../components/footer/Footer";

function NFTList() {
  const [filter, setFilter] = useState("howToBuy");
  const [selectedFaq, setSelectedFaq] = useState("howToBuy");

  const faqs = [
    {
      filter: "howToBuy",
      data: [
        "When the musics over turn off the light?",
        "What is the best  way to collect NFT?",
        "what si the  best way to collect NFT?",
        "What is  the best way to collect NFT?",
        "what si the best way to collect  NFT?",
        "Wha t is the best way to collect NFT?",
        "What is the b est way to collect NFT?",
      ]
    },
    {
      filter: "gotToken",
      data: [
        "When the musics over turn off the light?",
        "What is the best  way to collect NFT?",
        "what si the  best way to collect NFT?",
        "What is  the best way to collect NFT?",
        "what si the best way to collect  NFT?",
        "Wha t is the best way to collect NFT?",
        "What is the b est way to collect NFT?",
        "What is the bes t way to collect NFT?",
      ]
    },
    {
      filter: "perks",
      data: [
        "When the musics over turn off the light?",
        "What is the best  way to collect NFT?",
        "what si the  best way to collect NFT?",
        "What is  the best way to collect NFT?",
        "what si the best way to collect  NFT?",
        "Wha t is the best way to collect NFT?",
        "What is the b est way to collect NFT?",
        "What is the bes t way to collect NFT?",
      ]
    },
    {
      filter: "instrumentals",
      data: [
        "When the musics over turn off the light?",
        "What is the best  way to collect NFT?",
        "what si the  best way to collect NFT?",
        "What is  the best way to collect NFT?",
        "what si the best way to collect  NFT?",
        "Wha t is the best way to collect NFT?",
        "What is the b est way to collect NFT?",
        "What is the bes t way to collect NFT?",
      ]
    }
  ];
  return (
    <div className="home-page">
      <div className="main-content">
        <div className='navbar main-font'>
          <nav className='items-container d-flex flex-column flex-lg-row w-100 align-items-center'>
              <div className='menus flex-grow-1 nav-menu'>
                <Link className='menu-item' to='/'>Home</Link>
                <Link className='menu-item' to='#'>Explore<i className="fa fa-chevron-down"></i></Link>
                <Link className='menu-item' to='#'>about</Link>
                <Link className='menu-item' to='#'>Merchandise</Link>
                <Link className='menu-item' to='#'>Got Token</Link>
                <Link className='menu-item' to='#'>Team</Link>
                <Link className='menu-item' t0='#'>Contact</Link>
              </div>
              <div className='navbar-right nav-menu'>
              <div className='search align-center'>
                  <img src="assets/images/search.svg" width={24}></img>
              </div>
              <div className='join-button-content'>
                  <button className='join-button font-15'>Join Now</button>
              </div>
              </div>
          </nav>
        </div>
      </div>
      <div className="text-center">
        <Link to="/">
          <img src="assets/images/logo.png" width={210} alt=''></img>
        </Link>
      </div>
      <div className="page-title-section mt-5">
        <div className="page-title-block">
          <div className="page-title-content text-center">
            <div className="page-title main-font">Help Center</div>
            <div className="page-breadcrumb subtext-font">
              Home &nbsp;&nbsp;&gt;&nbsp;&nbsp; Explore &nbsp;&nbsp;&gt;&nbsp;&nbsp; Help Center
            </div>
          </div>
        </div>
      </div>
      <div className="share-this-page text-center subtext-font">Share this page</div>
      <div className='social-block text-center'>
        <a href='' className='social-link'>
          <img src='assets/images/facebook.svg' alt=''></img>
        </a>
        <a href='' className='social-link'>
          <img src='assets/images/twitter.svg' alt=''></img>
        </a>
        <a href='' className='social-link'>
          <img src='assets/images/telegram.svg' alt=''></img>
        </a>
        <a href='' className='social-link'>
          <img src='assets/images/youtube.svg' alt=''></img>
        </a>
      </div>
      <div className="section-block-block">
        <div className='section-block section-spacing'>
          <div className='text-center'>
            <span className='section-tag main-font'><span className='section-tag-font'>FAQs</span></span>
            <div className='section-title main-font'>
              We Hope You Find What You<br/>
              are Looking for
            </div>
            <div className='section-title-caption our-collection-caption subtext-font'>
              Below is a list of frequently asked questions and answers from partners and 3D artist.<br/>
              Please check this FAQ first before contacting us.
            </div>
            <div>        
              <input className="filter-input search-filter-item" placeholder="Search..."/>
              <img className="search-icon-img" src="assets/images/search.svg" alt=""></img>
            </div>
            <div className="row">
              <div className="faq-block">
                <div className="d-flex flex-wrap help-center-faq faq-btns justify-content-center text-center">
                  {faqs.map(cell => (
                    <button
                      className={clsx("main-font", {
                        "view-more-btn": filter === cell.filter,
                        "faq-btn": filter !== cell.filter
                      })}
                      onClick={() => setFilter(cell.filter)}
                      key={cell.filter}
                    >
                      {cell.filter}
                    </button>
                  ))}
                </div>
                <hr className="help-center-hr"/>
                <div>
                  {faqs.find((cell) => cell.filter === filter).data.map((title, index) => (
                    <div
                      className={clsx("faq-item", {
                        activeFaq: selectedFaq === title
                      })}
                      key={index}
                      onClick={() => setSelectedFaq(selectedFaq === title ? '' : title)}
                    >
                      <div className="col-md-6 col-sm-12">
                        <div className="faq-header d-flex align-items-center justify-content-between">
                          <div className="faq-number text-white font-weight-bold text-center">
                            {`${`${index + 1}`.padStart(2, "0")}.`}
                          </div>
                          <h6 className="faq-title text-white py-0 my-0">
                            {title}
                          </h6>
                          <div className="faq-expand d-flex">
                            {selectedFaq === title ? (
                              <img
                                src="/assets/images/minus.png"
                                alt=""
                                width={16}
                                height={2}
                              />
                            ) : (
                              <img
                                src="/assets/images/plus.png"
                                width={16}
                                height={16}
                                alt=""
                                className="plus-icon"
                              />
                            )}
                          </div>
                        </div>
                        <div className="faq-content">
                          <p className="p-0 m-0 text-white">
                            Below is a list of frequently asked questions and answers.
                            Please check this FAQ first before contacting us.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
            </div>
            <div className='section-title-caption our-collection-caption get-in-touch subtext-font'>
              If you don`t find an answer, contact with our experts, please
            </div>
            <div className='text-center d-flex justify-content-center'>
              <div className='view-more'>
                <button className='view-more-btn main-font'>Get In Touch</button>
              </div>
            </div>
            <div className="video-block">
              <div className='section-title main-font'>
                See how we<br/>
                solve problems
              </div>
              <div className="page-title-block video-content">
                <img className="w-100" src="assets/images/video_caption1.png" alt=""></img>
                <button className="play-button"><img className="play-icon" src="assets/images/play_icon.png" alt=""></img></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <Footer/>
      </div>
    </div>
  );
}

export default NFTList;
