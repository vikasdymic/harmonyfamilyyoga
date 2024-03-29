import React, { Component } from 'react';
import './Main.css';
import Header from './Header';
import Hero from './Hero';
import Cards from './Cards';
import CaseStudy from './CaseStudy';
import Partner from './Partner';
import Ignite from './Ignite';
import Footer from './Footer';
import Event from './Event';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <Ignite />
        <Event></Event>
        <CaseStudy />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
