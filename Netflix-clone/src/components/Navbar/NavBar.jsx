import React, { useEffect, useRef } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_icon from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const NavBar = () => {

  const navRef=useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('dark');
      }else{
        navRef.current.classList.remove('dark');
      }
    })
  },[]);
  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt=""></img>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} className='icons'></img>
        <p>children</p>
        <img src={bell_icon} className='icons'></img>
        <div className="navbar-profile">
          <img src={profile_icon}className='profile'></img>
          <img src={caret_icon}></img>
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out of the netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
