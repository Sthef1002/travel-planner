import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.css'
import HoverImage from "react-hover-image"
import foodg from "./NavBar/foodg.png"
import foodr from "./NavBar/foodr.png"
import coffeeg from "./NavBar/coffeeg.png"
import coffeer from "./NavBar/coffeer.png"
import bagg from "./NavBar/shoppingg.png"
import bagr from "./NavBar/shoppingr.png"
import nightg from "./NavBar/nightg.png"
import nightr from "./NavBar/nightr.png"
import fung from "./NavBar/fung.png"
import funr from "./NavBar/funr.png"
import breakfastg from "./NavBar/breakfastg.png"
import breakfastr from "./NavBar/breakfastr.png"


class Food extends React.Component {
  render(){
    return (
      <div>
        <HoverImage
          src={foodg}
          hoverSrc={foodr}
          style = {{
            width:35, 
            height:35, 
            marginRight:20,  
            marginLeft: 1200, 
            padding: 5, 
            border: '1px solid white', 
            borderRadius: 5,
            boxShadow: '0px 2px 6px #00000045'
          }}
        />
      </div>
    )
  }
}

class Coffee extends React.Component {
  render(){
    return (
      <div>
        <HoverImage
          src={coffeeg}
          hoverSrc={coffeer}
          style = {{
            width:35, 
            height:35, 
            marginRight:20,  
            padding: 5, 
            border: '1px solid white', 
            borderRadius: 5,
            boxShadow: '0px 2px 6px #00000045'
          }}
        />
      </div>
    )
  }
}

class Nightlife extends React.Component {
  render(){
    return (
      <div>
        <HoverImage
          src={nightg}
          hoverSrc={nightr}
          style = {{
            width:35, 
            height:35, 
            marginRight:20,  
            padding: 5, 
            border: '1px solid white', 
            borderRadius: 5,
            boxShadow: '0px 2px 6px #00000045'
          }}
        />
      </div>
    )
  }
}

class Fun extends React.Component {
  render(){
    return (
      <div> 
        <HoverImage
          src={fung}
          hoverSrc={funr}
          style = {{
            width:35, 
            height:35, 
            marginRight:20,  
            padding: 5, 
            border: '1px solid white', 
            borderRadius: 5,
            boxShadow: '0px 2px 6px #00000045'
          }}
        />
      </div>
    )
  }
}

class Shopping extends React.Component {
    render(){
      return (
        <div>
          <HoverImage
            src={bagg}
            hoverSrc={bagr}
            style = {{
              width:35, 
              height:35, 
              marginRight:20,  
              padding: 5, 
              border: '1px solid white', 
              borderRadius: 5,
              boxShadow: '0px 2px 6px #00000045'
            }}
          />
        </div>
      )
    }
  }
 
  class Breakfast extends React.Component {
    render(){
      return (
        <div>
          <HoverImage
            src={breakfastg}
            hoverSrc={breakfastr}
            style = {{
              width:35, 
              height:35, 
              marginRight:20,  
              padding: 5, 
              border: '1px solid white', 
              borderRadius: 5,
              boxShadow: '0px 2px 6px #00000045'
            }}
          />
        </div>
      )
    }
  }

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar id='nav' fixed="top">
                    <Navbar.Brand href="#home">
               
                        <img
                            alt="Travel Planner logo"
                            src="/logo.png"
                            height="40"
                            width="111"   
                        />
                    </Navbar.Brand>
                    <Food className="icons"/>
                    <Coffee className="icons"/>
                    <Nightlife className="icons"/>
                    <Fun className="icons"/>
                    <Shopping className="icons"/>
                    <Breakfast className="icons"/>
                </Navbar> 
            </div>
        )
    }
}
