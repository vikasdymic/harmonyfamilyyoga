import React, { Component } from 'react';
import './Scss/Event.css';
import NewMoonImage from '../img/new-moon-ceremony.jpg'

class Event extends Component {

render() {
return (
    <section className="events">
        <h1 className="headingOne">Upcoming Events</h1>
        <div className="events-box">
            <div>
                <h2>New Moon Ceremony</h2>
                <p>Children friendly, all are welcome. Join us for a free event this SATURDAY at Harmony Family Yoga Center. Door opens at 7.30pm.  
    No previous yoga experience needed. </p>
                <a href="https://mailchi.mp/95120f23810c/new-moon-ceremony">Reserver Your Spot</a>
            </div>
            <div>
                <img height="300px" src={NewMoonImage}/>
            </div>
        </div>
    </section>
);
}
}
export default Event;
