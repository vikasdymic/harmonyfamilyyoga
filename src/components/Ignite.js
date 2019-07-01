import React, { Component } from 'react';
import Card from './Card';

class Ignite extends Component {
  render() {
    return (
      <section className='igniteSection'>
        <h1 className='headingOneAlt'>Harmony Family Yoga</h1>
        <div className='igniteCards'>
          <Card
            cardIcon={null}
            cardTitle='World Class Yoga'
            cardText='A children inspired and family based yoga studio is bringing together people of all ages and spreading mindfulness in our community with the mission of love and peace.'
          />
          <Card
            cardTitle='Rejuvinating'
            cardText='Healing through to improve our five senses from experiencing scent therapy, healing sound, enhanced visuals and a healthy life style, our certified instructors go beyond the physical aspect and bring out the benefits of your overall mental and emotional wellbeing.'
          />
          <Card
            cardTitle='Safe Space'
            cardText='We aim to provide a safe and cozy environment, and encourage you introduce your children and families to yoga by sharing your own practice and journey with them. Quiet the mind and connect to your inner self. Take a deep breath in, now let it out.'
          />
        </div>
      </section>
    );
  }
}
export default Ignite;
