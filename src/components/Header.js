import React, { Component } from 'react';
import Button from './Button';
import Logo from '../img/logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href='https://thesulfurgroup.com'>
              <img className='logo' src={Logo} alt='Harmony Family Yoga | Mandala' />
            </a>
          </div>
          <div className='navRight'>
            <Button buttonStyle='small' buttonLabel='Sign Up' />
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
