import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './button.css';
//import {Button} from 'react-bootstrap'

//import 'C:/Users/Divyanshu/node_modules/bootstrap/dist/css/bootstrap.css'
//import './plus'
import Lists from "./Lists"
class App extends Component{
  constructor(props)
  {
    super(props)
    
    this.state =
    {
      items:[],
      show:false
    };
    this.addItem = this.addItem.bind(this);
    this.Togle =this.Togle.bind(this);
 this.Toglee =this.Toglee.bind(this);
  }
  addItem(e)
  {
    if(this._inputElement.value !=="")
    {
      var newItem = {
        text:this._inputElement.value,
        key : Date.now()
      };
      this.setState((prevState) => {
        return {
          items : prevState.items.concat(newItem)
        };
      });
    }
    
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  }
  Togle = () => {
    const { show } = this.state;
    this.setState ( {show:true} )
  }
  Toglee = () => {
    const { show } = this.state;
    this.setState ( {show:false} )
  }
render() {
  return (<div>
    
    <div >
      <span className="App " >Todo
        </span>
        <span><button className ="button" onClick = {this.Togle}>+</button></span>
        <ColoredLine color="white" />
          <Lists  className ="clr" entries = {this.state.items}>
         
          
          </Lists>
          
          
          { this.state.show && <form   onSubmit={this.addItem} onPointerLeave={this.Toglee}>
         
          <input  ref = {(a) => this._inputElement =a }  className="field"  ></input>
          
   
          </form> }  
          <style>{'body { background-color: #A9ADAB; }'}</style>
          
        
      </div></div>
      
  );
}


  
}
const ColoredLine = ({ color,h }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: .1
      }}
  />
);
export default App;
