import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    return (
      <section className='cardsSection'>
        <h1 className='headingOne'>A Redefined Palette Of Innovation</h1>
        <div className='cards'>
          <Card
            cardIcon={null}
            cardTitle='Data Driven Analytics'
            cardText='Numbers never lie, neither do we. Through measuring, analyzing, and re-executing we are constantly ahead of the trend in traditional advertising.'
          />
          <Card
            cardIcon={null}
            cardTitle='Authentic Engagement'
            cardText='Your brand is our brand. We custom-tailor our search in connecting you with the closest true-to-fit identity to spark your audience.'
          />
          <Card
            cardIcon={null}
            cardTitle='Quality Relationships'
            cardText='We’re all about people and genuine connections. True engagement begins with honest talent and in-person interactions to create full coverage experience for all.'
          />
          <Card
            cardIcon={null}
            cardTitle='Strategy Development'
            cardText='Every step and action is intentional. Our methodology integrates multi-media marketing and calculated design to propel each campaign into success.'
          />
        </div>
      </section>
    );
  }
}
export default Cards;
