import './App.css';
import React, { Component } from "react";
import {obj,colors} from './info';

class App extends Component{
  constructor(props){
      super(props);
      this.state={
          color:'purple',
          opacity:1,
          randomQuote:0
      };
      this.handleClick=this.handleClick.bind(this)
  }
handleClick(){
  const random=Math.floor(Math.random()*obj.length);
  const math=Math.floor(Math.random()*colors.length);
    this.setState({
    color:colors[math],
    opacity:0
      })
      setTimeout(() => {
        this.setState({
          opacity:1
        })
      }, 1000);
      setTimeout(() => {
        this.setState({
          randomQuote:random
        })
      }, 700);
}

  render(){
    
    const bgColor={
      backgroundColor:this.state.color,
      transition:"1s"
    }
    const styles={
      color:this.state.color,
      opacity:this.state.opacity,
      transition:"1s"
    }
      return(
        <div>
          <div className='container'>
         <div style={bgColor} className='fullBody' >
           <div className='card'>
             <div className='text' style={styles}>
           
           <h1>{obj[this.state.randomQuote]["name"]}</h1>
           <h3> {obj[this.state.randomQuote].quote}</h3>
           </div>
         
         <p style={bgColor} onClick={this.handleClick}>new quote</p>
         </div>
         <span>Shakhboz Fazliev</span>
         </div>
         </div>
         </div>
      )
  }
}

export default App
