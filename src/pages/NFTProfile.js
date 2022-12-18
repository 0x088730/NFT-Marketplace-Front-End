import React from "react";
import Header from "../components/header/Navbar";
import Footer from "../components/footer/NFTFooter";
import NFTBNBCard from "../components/subcomponents/NFTBNBCard";
import AudioPlayer from "../components/AudioPlayer";

const CollectionList = [
  {NFTUrl: "assets/images/shining.png", NFTName: "Shining", ownerName: "@materium", usdPrice: "140.05", count: "1200", price: "0.49", avatarUrl: "assets/images/avatar1.png", time: "05:20"},
  {NFTUrl: "assets/images/forever.png", NFTName: "Forever", ownerName: "@materium", usdPrice: "140.05", count: "1200", price: "0.49", avatarUrl: "assets/images/avatar2.png", time: "01:04:50"},
  {NFTUrl: "assets/images/major1.png", NFTName: "Major", ownerName: "@materium", usdPrice: "140.05", count: "34", price: "0.49", avatarUrl: "assets/images/avatar3.jpeg", time: "03:30"},
  {NFTUrl: "assets/images/dont.jpeg", NFTName: "Don't Understand", ownerName: "@materium", usdPrice: "140.05", count: "34", price: "0.49", avatarUrl: "assets/images/avatar4.jpeg", time: "05:20"}, 
  {NFTUrl: "assets/images/shining.png", NFTName: "Shining", ownerName: "@materium", usdPrice: "140.05", count: "1200", price: "0.49", avatarUrl: "assets/images/avatar1.png", time: "01:04:50"},
  {NFTUrl: "assets/images/forever.png", NFTName: "Forever", ownerName: "@materium", usdPrice: "140.05", count: "1200", price: "0.49", avatarUrl: "assets/images/avatar2.png", time: "03:30"},
  {NFTUrl: "assets/images/major1.png", NFTName: "Major", ownerName: "@materium", usdPrice: "140.05", count: "34", price: "0.49", avatarUrl: "assets/images/avatar3.jpeg", time: "05:20"},
  {NFTUrl: "assets/images/dont.jpeg", NFTName: "Don't Understand", ownerName: "@materium", usdPrice: "140.05", count: "34", price: "0.49", avatarUrl: "assets/images/avatar4.jpeg", time: "01:04:50"},
  {NFTUrl: "assets/images/shining.png", NFTName: "Shining", ownerName: "@materium", usdPrice: "140.05", count: "1200", price: "0.49", avatarUrl: "assets/images/avatar1.png", time: "05:20"},
  {NFTUrl: "assets/images/forever.png", NFTName: "Forever", ownerName: "@materium", usdPrice: "140.05", count: "1200", price: "0.49", avatarUrl: "assets/images/avatar2.png", time: "05:20"},
  {NFTUrl: "assets/images/major1.png", NFTName: "Major", ownerName: "@materium", usdPrice: "140.05", count: "34", price: "0.49", avatarUrl: "assets/images/avatar3.jpeg", time: "03:30"},
  {NFTUrl: "assets/images/dont.jpeg", NFTName: "Don't Understand", ownerName: "@materium", usdPrice: "140.05", count: "34", price: "0.49", avatarUrl: "assets/images/avatar4.jpeg",  time: "03:30"}
]


function NFTList() {
  return (
    <div className="home-page-nft">
      <div className="gradient-image-nft">
        <div className="main-content">
          <Header/>
        </div>
        <div className="section-block-block">
          <div className="section-block mt-0">
            <div className="row">
              <div className="col-md-6">
                <img className="width-100" src="assets/images/dont.jpeg" alt=""></img>
              </div>
              <div className="col-md-6 collection-right-content">
                <div className="dont-understand-title">Don't Understand</div>
                <div className="user-avatar">
                  <img className="avatar-img" src="assets/images/jahil.jpeg" alt=""></img>
                  <span className="avatar-username">@jahilbeats</span>
                </div>
                <div className="collection-buy-block">
                  <div className="row">
                    <div className="col-sm-6 px-0">
                      <div className="collection-price">
                        <div className="collection-price-text color-white">Price</div>
                        <div className="collection-price-number">
                          <img src="assets/images/ETH_logo.svg" alt=""></img>
                          <span className="collection-price-number-text">1 ETH</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 px-0">
                      <div className="collection-price">
                        <div className="collection-price-text color-white">Highest Floor Bid</div>
                        <div className="collection-price-number">
                          <img src="assets/images/ETH_logo.svg" alt=""></img>
                          <span className="collection-price-number-text">0.25 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-content-center d-flex">
                    <div className="last-sale-price">Last sale <br/> price </div>
                    <div className="lastsale-price-number-text align-center">0.55 ETH</div>
                  </div>
                  <div className="collection-buy-btn-block d-flex justify-content-between">
                    <button className="collection-buy-btn collection-buy-now">BUY NOW</button>
                    <button className="collection-buy-btn collection-place-bid">Place Bid</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="audioPlayerLocation">
              <AudioPlayer />
            </div>
            <div className="collection-block">
              <div className="similar-collection main-font">Similar Collections</div>
              <div className="collection-filter-block d-flex justify-content-center">
                <div className="text-center filter-content">
                  <button className="collection-filter-btn collection-btn">
                    <img src="assets/images/filter_icon.svg" width={24} alt=""></img>&nbsp;&nbsp;Filters
                  </button>
                  <input className="filter-input collection-filter-item search-collection-input" placeholder="Search in the collections..."/>
                  <i className="fa fa-search search-icon"></i>
                </div>
                <div className="text-center filter-content">
                  <select className="filter-buy-input collection-filter-item filter-input collection-price-select filter-select">
                    <option>Price low to high</option>
                  </select>
                  <button className="collection-column-btn collection-filter-item collection-btn">
                    <img src="assets/images/column_icon.svg" width={24} alt=""></img>
                  </button>
                  <button className="collection-list-btn collection-filter-item collection-btn">
                    <img src="assets/images/list_icon.svg" width={24} alt=""></img>
                  </button>
                </div>
              </div>
            </div>
            <div className="nft-filter-list">
              <div className="row">
                {CollectionList.map((item, index) =>
                  <div className="col-lg-4 col-md-6 col-sm-6 px-0 py-3" key={index}>
                    <NFTBNBCard 
                      key={index}
                      NFTUrl={item.NFTUrl}
                      NFTName={item.NFTName}
                      ownerName={item.ownerName}
                      count={item.count}
                      price={item.price}
                      usdPrice={item.usdPrice}
                      avatarUrl={item.avatarUrl}
                      time={item.time}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="nftfooter-section">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default NFTList;
