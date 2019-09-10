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
              <a href='mailto:cc@harmonyfamilyyoga.com'>
                cc@HarmonyFamilyYoga.com
              </a>
            </p>
            <p>
              <a href='tel:18055583634'>Phone: (805) 558-3634</a>
            </p>
            <p>1655 E. Thousand Oaks Blvd., Suite 101.<br/>Thousand Oaks, CA 91362</p>
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
