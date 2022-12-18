import React from 'react'
import NFTItem from './subcomponents/NFTItem'
const CollectionList = [
  {NFTUrl: "assets/images/dont.jpeg", NFTName: "Major", count: "3432", price: "350"},
  {NFTUrl: "assets/images/forever.png", NFTName: "Forever", count: "3432", price: "350"},
  {NFTUrl: "assets/images/shining.png", NFTName: "Forever", count: "3432", price: "350"},
  {NFTUrl: "assets/images/major1.png", NFTName: "Major", count: "3432", price: "350"}
]

const NFTCheckOut = () => {
  return (
    <div className='NFT-checkout-block'>
      {CollectionList.map((item, index) =>
      <div>
        <NFTItem 
          key={index}
          NFT_img={item.NFTUrl}
          NFT_name={item.NFTName}
          price={item.price}
        />
        {index < CollectionList.length-1? <hr className='checkout-hr'/>:<div></div>}
      </div>
      )}
      <div className='price-list-block'>
        <div className='d-flex justify-content-between'>
          <div>Original price</div>
          <div>$4,320.00</div>
        </div>
        <div className='d-flex justify-content-between mt-5'>
          <div>Marketplace Fee</div>
          <div><span className='fee-price me-2'>($216)</span>5%</div>
        </div>
        <div className='d-flex justify-content-between mt-5'>
          <div>Total Price</div>
          <div>$4,536.00</div>
        </div>
      </div>
      <div className='row checkout-button-block'>
        <div className='col-sm-6 px-0'>
          <div className='search-button text-center'>Continue To Searching</div>
        </div>
        <div className='col-sm-6 px-0'>
          <div className='checkout-button text-center'>Check Out</div>
        </div>
      </div>
    </div>
  )
}

export default NFTCheckOut