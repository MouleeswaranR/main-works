import React from 'react';
import './Home.css';
import NavBar from '../../components/Navbar/NavBar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="main">
        <img src={hero_banner} className='banner-image'></img>
        <div className="caption-container">
          <img src={hero_title} className='caption-image'></img>
          <p>Discovering his ties to a secret order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy </p>
          <div className="video-buttons">
            <button className='btn'><img src={play_icon}></img>Play</button>
            <button className='btn dark-btn'><img src={info_icon}></img>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="many-movies">
      <TitleCards title={"BlockBuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Home
