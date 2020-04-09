import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar >
                    <Navbar.Brand href="#home">
                        <img
                            alt="Travel Planner logo"
                            src="/logo.png"
                            height="40"
                            width="111"   
                        />
                    </Navbar.Brand>
                </Navbar> 
            </div>
        )
    }
}
