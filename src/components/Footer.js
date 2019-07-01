import React, { Component } from 'react';
import Button from './Button';
import Modal from './Modal';

class Footer extends Component {
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
      <footer>
        <div className='footerTop'>
          <div className='contactUs'>
            <h3>Contact Us</h3>
            <p>
              <a href=''>
                cc@HarmonyFamilyYoga.com
              </a>
            </p>
            <p>
              <a href=''>Phone: (123) 456-7890</a>
            </p>
          </div>
          <button className='button' onClick={this.toggleModal}>Begin Today</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>Harmony Family Yoga</Modal>
        </div>
        <div className='footerBottom'>
          <p className='harmonyFamilyYogaTagline'>
            © Copyright 2019 -{' '}
            <span className='magicalLine'><a href='https://harmonyfamilyyoga.netlify.com'>Harmony Family Yoga.</a></span> All Rights
            Reserved.
          </p>
          <p className='dymicTagline'>
            Designed and Developed by <span className='magicalLine'><a href='https://www.dymic.com/'>Dymic Digital</a></span>
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
