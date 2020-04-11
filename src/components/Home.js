import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import { Route } from 'react-router-dom';


const Home = () => {
    return (
        <div id='home-back'>
            <div>
            <img 
            id = 'logo'
            src='/logo.png' 
            alt='logo' 
            />
            </div>
            <div>
            <Container id='container'>
                <h1 id='title'>For those who seek</h1>
                <h2 id='subTitle'>Find places to eat, drink, shop, or visit in any city in the world, add them to your trip planner and get ready to explore.</h2>
                <Route exact path="/" component={Search} />
            </Container>
            <div>
                <p id='copyright' >Travel Planner © 2020 All rights reserved.</p>
            </div>
            </div>
        </div>
    );
}

export default Home;