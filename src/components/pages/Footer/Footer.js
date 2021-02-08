import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {  FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Join our exclusive membership to receive the latest news and trends</p>
        <p className='footer-subscription-text'>You can unsubscribe at any time.</p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Your Email' />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/karol4rr/'>Instagram</a>
            <a href='https://github.com/Karol4rr'>GitHub</a>
            <a href='https://www.linkedin.com/in/karol-m-6908b7167/'>LinkedIn</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              Karol Mika 
            </Link>
          </div>
          <small className='website-rights'>KAROL MIKA © 2021</small>
          <div className='social-icons'>
            <a className='social-icon-link' href='https://www.instagram.com/karol4rr/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </a>
            <a className='social-icon-link' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </a>
            <a className='social-icon-link' href='https://twitter.com/elonmusk' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </a>
            <a className='social-icon-link' href='https://www.linkedin.com/in/karol-m-6908b7167/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
