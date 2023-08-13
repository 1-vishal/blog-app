import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg'
import Home from '../pages/Home';
// import Search from '../assets/search.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links-menu'>
        <Link className='menu-heading'>Explore </Link>
        <span className='arrow right'></span>
        <ul className='menu'>
          <h3><u>Topics</u></h3>
          <Link className='link'><h4>Art</h4></Link>
          <Link className='link'><h4>Psychology</h4></Link>
          <Link className='link'><h4>History</h4></Link>
          <Link className='link'><h4>Science</h4></Link>
          <Link className='link'><h4>Technology</h4></Link>
        </ul>
      </div>
      <div className='logo'>
        <a href='/'>
        <img src={Logo} alt="" /></a>
      </div>
      <div className='search'>
        <input type="text" name="search" id="search" placeholder='Search the blog' />
        <button className=''>Search</button>
      </div>
    </div>
  )
}

export default Navbar