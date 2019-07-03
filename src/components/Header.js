import React, { Component } from 'react';
import Button from './Button';
import Logo from '../img/harmony-family-yoga-logo.png';
import Modal from './Modal';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href='https://www.harmonyfamilyyoga.com/'>
              <img className='logo' src={Logo} alt='Harmony Family Yoga | Mandala' />
            </a>
          </div>
          <div className='navRight'>
            <button className='medium button' onClick={this.toggleModal}>Sign up</button>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>Harmony Family Yoga</Modal>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
