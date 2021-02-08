import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { SiNetflix } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Projects</h1>
          <div className='pricing__container'>
            <a href='https://messenger-clone-6f126.web.app/' className='pricing__container-card' target="_blank">
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFacebookMessenger />  
                </div>
                <h4>Messenger</h4>
                <p>Clone</p>
                <ul className='pricing__container-features'>
                  <li>React</li>
                  <li>HTML / CSS / JS</li>
                  <li>Firebase</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Open Project
                </Button>
              </div>
            </a>
            <a href='https://netflix-clone-c4500.web.app/' className='pricing__container-card' target="_blank">
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <SiNetflix />
                </div>
                <h4>Netflix</h4>
                <p>Clone</p>
                <ul className='pricing__container-features'>
                  <li>React</li>
                  <li>HTML / CSS / JS</li>
                  <li>Firebase</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Open Project
                </Button>
              </div>
            </a>
            <a href='https://karol4rr.github.io/PasswordGenerator/PasswordGenerator.html' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <RiLockPasswordLine />
                </div>
                <h3>Password</h3>
                <h4>Generator</h4>
                <ul className='pricing__container-features'>
                  <li>Python / Django</li>
                  <li>HTML / CSS / JS</li>
                  <li>Bootstrap</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Open Project
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
