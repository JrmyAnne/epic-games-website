import React from 'react';
import EpicGamesLogo from '../Assets/Images/EpicGamesLogo.png';
import web_icon from '../Assets/Images/web.png';
import user_icon from '../Assets/Images/user.png';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar_container'>
      <div className='navbar_left_container'>
        <div className='logo_container'>
          <img className='logo' src={EpicGamesLogo} />
        </div>

        <ul className='navbar_list'>
          <li className='navbar_list_item'>STORE</li>
          <li className='navbar_list_item'>NEWS</li>
          <li className='navbar_list_item'>FAQ</li>
          <li className='navbar_list_item'>HELP</li>
          <li className='navbar_list_item'>UNREAL ENGINE</li>
          <div className='divider'></div>

          <li className='navbar_list_item'>ABOUT EPIC</li>
        </ul>
      </div>
      <div className='navbar_right_container'>
        <img className='nav_icon' src={web_icon} />
        <img className='nav_icon' src={user_icon} />
        <div className='signin'>SIGN IN</div>
        <div className='GetEpicGames'>GET EPIC GAMES</div>
      </div>
    </div>
  );
};

export default Navbar;
