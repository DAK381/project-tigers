import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
    <div className='footer-container'>
      <section className='footer-heading'>
        <p className='footer-heading'>
          JOIN THE NAFA TODAY!
        </p>
        <p className='footer-heading-text'>
        <Link to='sign-up'> Be a part of the Neville Family. </Link>
        </p>

      </section>
      <div class='footer-links'>
        
          <div class='footer-link-items'>
            <h2>Stay Connected</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
        
        </div>
      </div>

     
    </div>
  );
}

export default Footer;
