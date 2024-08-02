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
          <img className='header-img' src={drawer} alt="Dark green cabinet with 5 drawers, a vase and 2 pictures on top" />
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
            <img className='person-img' src={michelle} alt="A picture of the creator of the article, Michelle Appleton" />
            <div className="name">
              <h4>Michelle Appleton</h4>
              28 Jun 2020
            </div>
            <div className="share-container">
              <button onClick={handleSocialMedia}>
                <img src={shareIcon} width="15" height="13" alt="Button for social media links to open, called share button" />
              </button>
                <div className={`share ${socialMedia ? 'active' : ''}`}>
                <p>SHARE</p>
                <div className="icons">
                  <a href='http://facebook.com'><img src={facebook} alt="Icon of Facebook logo" /></a>
                  <a href="http://twitter.com"><img src={twitter} alt="Icon of Twitter logo" /></a>
                  <a href="http://pinterest.com"><img src={pinterest} alt="Icon of Pinterest logo" /></a>
                </div>
                <button onClick={handleSocialMedia}>
                  <img src={shareIcon} width="15" height="13" alt="Button for social media links to open, called share button" />
                </button>
                <div className="square"></div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
