import React from 'react';
import Form from './Form';
import './Home.css'
 
const home = () => {
    return (
        <div>
            <h1>For those who seek</h1>
            <h2>Find places to eat, drink, shop, or visit in any city in the world, add them to your trip 
planner and get ready to explore.</h2>
            <p>Travel Planner © 2020 All rights reserved.</p>
            <img id='img-back' src='./Background.png' alt='background'></img>
            <Form />
        </div>
    );
}
 
export default home;