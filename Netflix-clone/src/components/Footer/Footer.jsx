import React from 'react';
import './Footer.css';
import fb_icon from '../../assets/facebook_icon.png';
import insta_icon from '../../assets/instagram_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import yt_icon from '../../assets/youtube_icon.png';




const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
      <img src={fb_icon}></img>   
      <img src={insta_icon}></img>
      <img src={twitter_icon}></img>
      <img src={yt_icon}></img>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legacy Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">@1997-2024 Netflix, Inc.</p>
    </div>

  )
}

export default Footer
