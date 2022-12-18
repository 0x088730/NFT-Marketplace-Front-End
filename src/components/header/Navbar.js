import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar main-font'>
      <nav className='items-container d-flex flex-column flex-lg-row w-100 align-items-center'>
        <Link to="/">
          <img src="assets/images/logo.png" width={210} alt=''></img>
        </Link>
        <div className='menus text-center flex-grow-1 nav-menu'>
          <a className='menu-item' href='#'>Home</a>
          <a className='menu-item' href='#'>about</a>
          <a className='menu-item' href='#'>Instrumental NFT Exchange<i className="fa fa-chevron-down"></i></a>
          <a className='menu-item' href='#'>Merchandise</a>
          <a className='menu-item' href='#'>Got Token</a>
          <a className='menu-item' href='#'>Team</a>
          <a className='menu-item' href='#'>Contact</a>
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
  )
}

export default Navbar