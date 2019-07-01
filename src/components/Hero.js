import React, { Component } from 'react';
import Button from './Button';
import HeroVideo from '../vid/hero-video.mp4';

class Hero extends Component {

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
            <p>-Chinese Proverb</p>
          </p>
          <Button buttonLabel='Connect to your inner self' />
        </div>
      </section>
    );
  }
}

export default Hero;
