import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 ,gameHasStarted:true,timer:0,reachedTodestiny:false};
    
     this.keyHandling=this.keyHandling.bind(this);
        this.buttonIsClicked=this.buttonIsClicked.bind(this);
  }
  
   keyHandling(e){
     
        
         if(this.state.x===250 && this.state.y===250)
        {
           this.setState({gameHasStarted:false})
            clearInterval(this.state.timer)
            
        }
     else
     {
          if(e.keyCode===39)
            {
                let xVal=this.state.x+5;
                this.setState({x:xVal})
            }

            if(e.keyCode===37)
            {
                let xVal=this.state.x-5;
                this.setState({x:xVal})
            }

            if(e.keyCode===40)
            {
                let yVal=this.state.y+5;
                this.setState({y:yVal})
            }

            if(e.keyCode===38)
            {
                let yVal=this.state.y-5;
                this.setState({y:yVal})
            }
     }
      }
  componentDidMount() {
    
     window.addEventListener("keydown",this.keyHandling)
  }

  componentWillUnmount() {
    
  }

   buttonIsClicked(){
 if(this.state.gameHasStarted===true)
 {
        this.state.timer=setInterval(()=>{
            this.state.time=this.state.time+1
            this.setState({time:this.state.time});
        },1000)
 }
        
      }


  render() {
    return (
 <>
       <button className="start" onClick={this.buttonIsClicked}>Start</button>
     <div className="heading-timer">{this.state.time}</div>
     <div className="ball" style={{left:this.state.x,top:this.state.y}}></div>
     <div className="hole"></div>
     
        
       
     
</>
    );
  }
}

export default Timer;
