import React, { Component } from 'react';
import './App.css';
import GoldRock from './images/GoldRock.png'
const world = <h1 style={{ color: "blue"}}>Hello, World</h1>;
const mars = <h1 style={{ color: "gray"}}>Hello, Moon</h1>;

const starting_message = <h1> Hover over me to go to the moon! </h1>;
const next_message = <h1> Good Job! Buy $MU to continue this muun trip. <span aria-label="rocket" role="img"> 🚀🚀🚀 </span></h1>

const NuggetStyle =
{
  "marginLeft": "100px"
}

class App extends Component {

  //Pickaxe css taken from - http://www.rw-designer.com/cursor-extern.php?id=30247
  constructor()
  {
    super();
    this.state = 
    {
      isHover: false,
      nuggets: 0,
      isAutoClick: false,
      message: "Get to work mining! Click the rock to get started!",
      miningPower: 1,
      style: {width: "300px", height: "300px", cursor: "diamondPickaxe.cur"}
    }
    this.rockStyle = this.rockStyle.bind(this);
    this.processKey = this.processKey.bind(this);
  }

  componentWillMount = () =>
  {
    document.addEventListener("keydown", this.processKey, false);
    this.setState({
      style: this.rockStyle("diamondPickaxe.cur")
    })
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.processKey, false);
  }

  handleMouseOver = () => {
      this.setState({
          isHover: true
      });
  }
  handleMouseOut = () => {
      this.setState({
          isHover: false
      });
  }
  rockStyle = (url) =>
  {
    let cursorString = "url(" + url + "), auto";
    return{
      width: "300px",
      height: "300px",
      cursor: cursorString,
    }
  }
  JNUG = () =>
  {
    if(this.state.nuggets > 5 && this.state.miningPower < 2)
    {
      this.setState({
        miningPower: this.state.miningPower + 1,
        nuggets: this.state.nuggets + this.state.miningPower,
        message: "You have unlocked a 2x leveraged pickaxe!",
        style: this.rockStyle("doubleDiamondPickaxe.cur")
      })
    }
    else if(this.state.nuggets > 50 && this.state.miningPower < 3)
    {
      this.setState({
        miningPower: this.state.miningPower + 1,
        nuggets: this.state.nuggets + this.state.miningPower,
        message: "You have unlocked a 3x leveraged pickaxe!",
        style: this.rockStyle("tripleDiamondPickaxe.cur")
      })
    }
    else if(this.state.nuggets > 150 && this.state.miningPower < 4)
    {
      this.setState({
        miningPower: this.state.miningPower + 1,
        nuggets: this.state.nuggets + this.state.miningPower,
        message: "You have unlocked a 4x leveraged pickaxe!",
        style: this.rockStyle("quadrupleDiamondPickaxe.cur")
      })
    }
    else if(this.state.nuggets > 300 && this.state.miningPower < 5)
    {
      this.setState({
        miningPower: this.state.miningPower + 1,
        nuggets: this.state.nuggets + this.state.miningPower,
        message: "You have unlocked a 5x leveraged pickaxe!",
        style: this.rockStyle("quintupleDiamondPickaxe.cur")
      })
    }
    else if(this.state.nuggets > 1000 && this.state.miningPower < 10)
    {
      this.setState({
        miningPower: 10,
        nuggets: this.state.nuggets + this.state.miningPower,
        message: "You have unlocked a 9x leveraged pickaxe!",
        style: this.rockStyle("nonupleDiamondPickaxe.cur")
      })
    }
    else if(this.state.nuggets > 1500)
    {
      const messageGameWin = <span> You win! Please continue the adventure over 
      at <a href="https://www.reddit.com/r/personalfinance/">Personal Finance</a>. <br/>
      <span style={NuggetStyle}> You can claim your free prize (a stock worth around $3 on average) 
      by using my Robinhood referral <a href="http://share.robinhood.com/adeetp"> 
      link </a>. <br /> </span>
      <span style={NuggetStyle}>Robinhood is a trading platform with zero 
      comissions or hidden fees giving you more freedom to trade on your own terms! </span>
      </span>
      this.setState({
        nuggets: this.state.nuggets + this.state.miningPower,
        message: messageGameWin
      })
    }
    else
    {
      this.setState({
        nuggets: this.state.nuggets + this.state.miningPower 
      })
    }
  }
  processKey(event)
  {
    if(event.keyCode === 32)
    {
      this.JNUG();
    }
  }
  render() {
    const isHover = this.state.isHover;
    let cur_element = null;
    let cur_message = null;
    if(isHover)
    {
      cur_element = mars;
      cur_message = next_message;
    }
    else
    {
      cur_element = world;
      cur_message = starting_message;
    }
    return (
      <div id="parent"> 
      {cur_element}
        <div id="handler"  onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          {cur_message}
        </div>
        <h1> Help the Direxion Daily Junior Gold Miners mine for gold! </h1>
        <img src={GoldRock} style={this.state.style} onClick={this.JNUG} draggable="false" alt="Gold Rock" />
        <br />
        <br />
        <span style={NuggetStyle}> Nuggets Mined: {this.state.nuggets} </span>
        <br />
        <span style={NuggetStyle}> {this.state.message} </span>
      </div>
    );
  }
}

export default App;
