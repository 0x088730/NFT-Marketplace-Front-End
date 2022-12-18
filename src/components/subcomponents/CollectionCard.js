import React from 'react'

const CollectionCard = ({btn_name, collection_url}) => {
  return (
    <div className='collection-card'>
      <img className='width-100' src='assets/images/collection_bg.png' alt=''></img>
      <div className='collection-content'>
        <div className='collection-img-content'>
          <img className='width-100 collection-img' src={collection_url} alt=''></img>
          <div className='collection-btn-block text-center'>
            <div className='collection-btn'>{btn_name}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard;