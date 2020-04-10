import React from 'react';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Search from './Search';
import { Route } from 'react-router-dom';
import Logo from './Logo/Logo';


const Home = () => {
    return (
        <div>
            <Jumbotron fluid id='home-back'>
            <Logo />
                <Container id='container'>
                    <h1 id='title'>For those who seek</h1>
                    <h2 id='subTitle'>Find places to eat, drink, shop, or visit in any city in the world, add them to your trip
                    planner and get ready to explore.</h2>
                    <Route exact path="/" component={Search} />
                    <p id='copyright' >Travel Planner © 2020 All rights reserved.</p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;