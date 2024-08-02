import '../css/style.css'
import drawer from '../images/drawers.jpg';
import michelle from '../images/avatar-michelle.jpg';
import shareIcon from '../images/icon-share.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import { useState } from 'react';

function App() {
  const [socialMedia, setSocialMedia] = useState(false);

  function handleSocialMedia() {
    setSocialMedia(!socialMedia);
  }

  return (
    <>
      <div className="container">
        <div className="left">
          <img className='header-img' src={drawer} alt="" />
        </div>
        <div className="right">
          <h1 className='headingTitle'>
            Shift the overall look and feel by adding these wonderful
            touches to furniture in your home
          </h1>
          <p className="headingText">
            Ever been in a room and felt like something was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.
          </p>
          <div className="person">
            <img className='person-img' src={michelle} alt="" />
            <div className="name">
              <h4>Michelle Appleton</h4>
              28 Jun 2020
            </div>
            <button onClick={handleSocialMedia}>
              <img src={shareIcon} width="15" height="13" alt="Button for social media links to open, called share button" />
            </button>
          </div>
          <div className={`share ${socialMedia ? 'active' : ''}`}>
            <p>SHARE</p>
            <div className="icons">
              <img src={facebook} alt="Icon of Facebook logo" />
              <img src={twitter} alt="Icon of Twitter logo" />
              <img src={pinterest} alt="Icon of Pinterest logo" />
            </div>
            <button onClick={handleSocialMedia}>
              <img src={shareIcon} width="15" height="13" alt="Button for social media links to open, called share button" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
