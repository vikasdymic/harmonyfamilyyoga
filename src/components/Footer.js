import React, { Component } from 'react';
import Button from './Button';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='footerTop'>
          <div className='contactUs'>
            <h3>Contact Us</h3>
            <p>
              <a href=''>
                Hello@HarmonyFamilyYoga.com
              </a>
            </p>
            <p>
              <a href=''>Phone: (123) 456-7890</a>
            </p>
          </div>
          <Button btnStyles='' buttonLabel='Begin today' />
        </div>
        <div className='footerBottom'>
          <p>
            © Copyright 2019 -{' '}
            <span className='magicalLine'>Harmony Family Yoga.</span> All Rights
            Reserved.
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
