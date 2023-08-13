import React from 'react';
import { Link } from 'react-router-dom';
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/icons8-facebook-50.png'
import Instagram from '../assets/instagram.png'
import Art from '../assets/art.png'
import Technology from '../assets/technology.png'
import Histories from '../assets/scroll.png'
import Psychology from '../assets/thinking.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-menu'>
        <div className='topics'>
          <Link><img src={Art} alt="" />ART</Link>
          <Link><img src={Technology} alt="" />TECHNOLOGY</Link>
          <Link><img src={Histories} alt="" />HISTORY</Link>
          <Link><img src={Psychology} alt="" />PSYCHOLOGY</Link>
        </div>
        <div className='social-links'> 
        <Link ><img src={Twitter} alt="" />Twitter</Link>
        <Link ><img src={Facebook} alt="" />Facebook</Link>
        <Link ><img src={Instagram} alt="" />Instagram</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer