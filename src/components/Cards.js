import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    return (
      <section className='cardsSection'>
        <h1 className='headingOne'>Classes for Every Age</h1>
        <div className='cards'>
          <Card
            cardIcon={null}
            cardTitle='Adults'
            cardText='Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.'
          />
          <Card
            cardIcon={null}
            cardTitle='Children'
            cardText='Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.'
          />
          <Card
            cardIcon={null}
            cardTitle='Baby'
            cardText='Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.'
          />
          <Card
            cardIcon={null}
            cardTitle='Senior'
            cardText='Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.'
          />
        </div>
      </section>
    );
  }
}
export default Cards;
