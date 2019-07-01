import React, { Component } from 'react';
import Card from './Card';
import Yoga1 from '../img/yoga_1.png';
import Yoga2 from '../img/yoga_2.png';
import Yoga3 from '../img/yoga_3.png';
import Yoga4 from '../img/yoga_4.png';

class Cards extends Component {
  render() {
    return (
      <section className='cardsSection'>
        <h1 className='headingOne'>Classes for Every Age<br /><span>(Private classes available on request)</span></h1>
        <div className='cards'>
          <Card
            cardIcon={Yoga1}
            cardTitle='Children'
            cardText='Harmony Family Yoga provides a safe environment for children as well. We offer the following experiences: Age 2-15, Parent and Me, Tots & Teen Yoga, Partner Yoga, and Family fun yoga. Strengthen growing bodies, enhance concentration, increases self esteem, teaches present moment awareness, discipline and responsibility.'
          />
          <Card
            cardIcon={Yoga2}
            cardTitle='Prenatal & Postnatal'
            cardText='Harmony Family Yoga offers classes for soon-to-be families as well. Cultivate a peaceful, relaxed state of body and mind. '
          />
          <Card
            cardIcon={Yoga3}
            cardTitle='Adults'
            cardText='Harmony Family Yoga offers adult classes including Morning Asana, Pranayama and Meditation; Candlelight and Karma Yoga. Feel happier, less stressed, less anxious, more compassionate and spark your creativity.'
          />
          <Card
            cardIcon={Yoga4}
            cardTitle='Senior'
            cardText='Meet new people and experience the following classes: Hatha yoga, Yin yoga, Restorative Yoga and Yoga Synergy. Maintain flexibility and enhance body awareness, Encourage kind peer and social interactions. '
          />
        </div>
      </section>
    );
  }
}
export default Cards;
