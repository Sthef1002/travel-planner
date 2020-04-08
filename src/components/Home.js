import React from 'react';
import Form from './Form';
import Logo from './Logo';
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Container from 'react-bootstrap/Container'; 
import Search from './Search';


const home = () => {
    return (
        <div>
            <Jumbotron fluid id='home-back'>
                <Container>
                    <Logo />
                    <h1 id='title'>For those who seek</h1>
                    <h2 id='subTitle'>Find places to eat, drink, shop, or visit in any city in the world, add them to your trip 
                    planner and get ready to explore.</h2>
                    <Form />
                    <Search />
                    <p id='copyright' >Travel Planner © 2020 All rights reserved.</p>
                </Container>
            </Jumbotron>
        </div>
    );
}
 
export default home;