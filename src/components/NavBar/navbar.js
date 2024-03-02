import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.jpg';
import {Link} from 'react-scroll';

const Navbar=()=> {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className="desktopMenue">
          <Link className='desktopMenueListItem'>Home</Link>
          <Link className='desktopMenueListItem'>About</Link>
          <Link className='desktopMenueListItem'>Blog</Link>
          <Link className='desktopMenueListItem'>Portfolio</Link>
          <Link className='desktopMenueListItem'>Researchs</Link>
          <Link className='desktopMenueListItem'>Experiences</Link>
      </div>

      
    </nav>
  )
}
export default Navbar