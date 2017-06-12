import React, { Component } from 'react';
import './App.css';

const world = <h1 style={{ color: "blue"}}>Hello, World</h1>;
const mars = <h1 style={{ color: "gray"}}>Hello, Moon</h1>;

const starting_message = <h1> Hover over me to go to the moon! </h1>;
const next_message = <h1> Good Job! <span aria-label="rocket" role="img"> 🚀🚀🚀 </span></h1>


class App extends Component {

  constructor()
  {
    super();
    this.state = 
    {
      isHover: false
    };
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
    console.log(this.isHover);
    return (
      <div id="parent"> 
      {cur_element}
        <div id="handler"  onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          {cur_message}
        </div>
      </div>
    );
  }
}

export default App;