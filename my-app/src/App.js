import React, { Component } from 'react';
import './App.css';
import GoldRock from './images/GoldRock.png'
const world = <h1 style={{ color: "blue"}}>Hello, World</h1>;
const mars = <h1 style={{ color: "gray"}}>Hello, Moon</h1>;

const starting_message = <h1> Hover over me to go to the moon! </h1>;
const next_message = <h1> Good Job! <span aria-label="rocket" role="img"> 🚀🚀🚀 </span></h1>

const RockStyle =
{
    width: "300px",
    height: "300px",
    cursor: "url(http://www.rw-designer.com/cursor-extern.php?id=30247), auto",
}
const NuggetStyle =
{
  "margin-left": "100px"
}

class App extends Component {

  constructor()
  {
    super();
    this.state = 
    {
      isHover: false,
      nuggets: 0,
      isAutoClick: false,
    };
    // this.JNUG = this.JNUG.bind(this);
    // this.autoClickSetup = this.autoClickSetup.bind(this);
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
  JNUG = () =>
  {
    this.setState({
      nuggets: this.state.nuggets + 1
    })
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
        <img src={GoldRock} style={RockStyle} onClick={this.JNUG} draggable="false" alt="Gold Rock" />
        <br />
        <br />
        <span style={NuggetStyle}> Nuggets Mined: {this.state.nuggets} </span>
        <br />
        <span> {this.state.message} </span>
      </div>
    );
  }
}

export default App;
