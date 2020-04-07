import React from 'react';
import Form from './Form';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Container from 'react-bootstrap/Container'; 


const home = () => {
    return (
        <div>
            <Jumbotron fluid id='home-back'>
                <Container>
                    <h1>For those who seek</h1>
                    <h2>Find places to eat, drink, shop, or visit in any city in the world, add them to your trip 
        planner and get ready to explore.</h2>
                    <Form />
                    <p id='copyright'>Travel Planner © 2020 All rights reserved.</p>
                </Container>
            </Jumbotron>
            <Form />
        </div>
    );
}
 
export default home;