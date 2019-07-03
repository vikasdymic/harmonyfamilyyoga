import React, { Component } from 'react';
import Button from './Button';
import HeroVideo from '../vid/vid3-588699866.mp4';
import Modal from './Modal';

class Hero extends Component {
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
      <section className='heroSection'>
        <div className='hero-video-wrapper'>
          <video muted autoPlay loop className='hero-video'>
            <source src={HeroVideo} type='video/mp4' />
            <script>
              document.querySelector('.hero-video').play();
            </script>
          </video>
        </div>
        <div className='heroContent'>
          <h1 className='heroContentTitle'>
            Harmony <span className='magicalLine'>Family</span> Yoga
          </h1>
          <p className='heroContentCopy'>
            <q>A family in harmony will prosper in everything.</q>
          </p>
          <button className='hero button' onClick={this.toggleModal}>Connect with your inner self</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>Harmony Family Yoga</Modal>
        </div>
      </section>
    );
  }
}

export default Hero;
