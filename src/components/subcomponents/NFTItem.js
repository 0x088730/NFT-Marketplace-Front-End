import React from 'react'

const NFTCard = ({NFT_img, NFT_name, price}) => {
  return (
    <div className='NFT-item'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
          <img className='NFT-item-img' src={NFT_img} width={100} alt=''></img>
          <div>
            <div className='NFT-item-name'>{NFT_name}</div>
            <div className='NFT-item-edition'>
              <select className="edition-select">
                <option value=''>Editions</option>
              </select>
              <label className='float-label-edition'>Editions</label>
            </div>
          </div>
        </div>
        <div className='align-center'>
          <span className='button'>
            <img className='mr-4' src='assets/images/edit.svg' width={20} alt=''></img>
          </span>
          <span className='button'>
            <img className='' src='assets/images/close.svg' width={20} alt=''></img>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NFTCard;