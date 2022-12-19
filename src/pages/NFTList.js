import React, { useEffect, useState } from "react";
import Header from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import ProducerCarousel from "../components/ProducerCarousel";
import NFTCard from "../components/subcomponents/NFTCard";

const CollectionList = [
  {NFTUrl: "assets/images/dont.jpeg", NFTName: "Major", ownerName: "Jahlil Beats ", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/forever.png", NFTName: "Forever", ownerName: "Reazy Renegrade", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/shining.png", NFTName: "Forever", ownerName: "DBans", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/major1.png", NFTName: "Major", ownerName: "DBans", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/sunlight.jpeg", NFTName: "Forever", ownerName: "Neezy N.E.B.", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/nft_bingo.png", NFTName: "Instrumental", ownerName: "Jahlil Beats", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/nft_bingo.png", NFTName: "Instrumental", ownerName: "Jahlil Beats", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/nft_bingo.png", NFTName: "Instrumental", ownerName: "Jahlil Beats", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/nft_bingo.png", NFTName: "Instrumental", ownerName: "Jahlil Beats", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/nft_bingo.png", NFTName: "Instrumental", ownerName: "Jahlil Beats", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/nft_bingo.png", NFTName: "Instrumental", ownerName: "Jahlil Beats", count: "3432", price: "0.45", btnText: "Place Bid"},
  {NFTUrl: "assets/images/nft_bingo.png", NFTName: "Instrumental", ownerName: "Jahlil Beats", count: "3432", price: "0.45", btnText: "Place Bid"}
]


function NFTList() {
  return (
    <div className="home-page">
      <div className="gradient-image">
        <div className="main-content">
          <Header/>
        </div>
        <div className="page-title-section">
          <div className="page-title-block">
            <div className="page-title-content text-center">
              <div className="page-title main-font">NFTs</div>
              <div className="page-breadcrumb subtext-font">
                Home &nbsp;&nbsp;&gt;&nbsp;&nbsp; Explore &nbsp;&nbsp;&gt;&nbsp;&nbsp; NFTs 
              </div>
            </div>
          </div>
        </div>
        <div className="share-this-page text-center subtext-font">Share this page</div>
        <div className='social-block text-center'>
          <a href='' className='social-link'>
            <img src='assets/images/facebook.svg' alt='social'></img>
          </a>
          <a href='' className='social-link'>
            <img src='assets/images/twitter.svg' alt='social'></img>
          </a>
          <a href='' className='social-link'>
            <img src='assets/images/telegram.svg' alt='social'></img>
          </a>
          <a href='' className='social-link'>
            <img src='assets/images/youtube.svg' alt='social'></img>
          </a>
        </div>
        <div className="section-spacing filter-item-block text-center">
          <div className="text-center filter-content">
            <input className="filter-search-input filter-input nft-list-search" placeholder="Search item here..."/>
            <img className="search-icon-img nft-list-search-img" src="assets/images/search.svg" alt=""></img>
            <select className="filter-category-input filter-input filter-select filter-item">
              <option value='All categories'>All categories</option>
            </select>
          </div>
          <div className="text-center filter-content">
            <select className="filter-buy-input filter-input filter-select filter-item">
              <option>Buy now</option>
            </select>
            <select className="filter-item-input filter-input filter-select filter-item">
              <option>All item</option>
            </select>
          </div>
        </div>
        <div className="producer-carousel-section">
          <ProducerCarousel/>
        </div>
        <div className="nft-list-block">
          <div className="nft-list-content row">
            {CollectionList.map((item, index) =>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 px-0 py-3" key={index}>
                <NFTCard 
                  key={index}
                  NFTUrl={item.NFTUrl}
                  NFTName={item.NFTName}
                  ownerName={item.ownerName}
                  count={item.count}
                  price={item.price}
                  btnText={item.btnText}
                />
              </div>
            )}
          </div>
        </div>
        <div className="footer-section">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default NFTList;
