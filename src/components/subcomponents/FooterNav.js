import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar main-font footer-nav'>
      <nav className='items-container footer-navbar d-flex flex-column flex-lg-row w-100 align-items-center'>
        <div>
          <Link to="/">
            <img src="assets/images/logo.png" width={210}></img>
          </Link>
        </div>
        <div className='menus text-center flex-grow-1 nav-menu'>
          <div className='footer-menu-block'>
            <a className='menu-item footer-menu-item' href='#'>Home</a>
            <a className='menu-item footer-menu-item' href='#'>about</a>
            <a className='menu-item footer-menu-item' href='#'>Instrumental NFT Exchange</a>
            <a className='menu-item footer-menu-item' href='#'>Merchandise</a>
            <a className='menu-item footer-menu-item' href='#'>Got Token</a>
            <a className='menu-item footer-menu-item' href='#'>Team</a>
            <a className='menu-item footer-menu-item' href='#'>Contact</a>
          </div>
          <div className='copy-right subtext-font'>
            Copyright © 2022, GOT INSTRUMENTALS
          </div>
        </div>
        <div className='navbar-right footer-social-block'>
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
        </div>
      </nav>
    </div>
  )
}

export default Navbar