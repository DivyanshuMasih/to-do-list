import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import './button.css';
//import {Button} from 'react-bootstrap'

import 'C:/Users/Divyanshu/node_modules/bootstrap/dist/css/bootstrap.css'
//import './plus'
import Lists from "./Lists"
class App extends Component{
  constructor(props)
  {
    super(props)
    
    this.state =
    {
      items:[]
    };
    this.addItem = this.addItem.bind(this);
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
render() {
  return (<div>
    <div >
      <span className="App " >Todo
        </span>
        <div>
          <form onSubmit={this.addItem}>
        <button type="submit" className="button btn btn-secondary btn-sm ">+</button>
  
          </form>
          </div>
          <Lists entries = {this.state.items}>
         
         
          </Lists>
          <form entries = {this.state.items} onSubmit={this.addItem}>
        
        
        <input className="button" ref = {(a) => this._inputElement =a} className="input"></input>
          </form>
        <style>{'body { background-color: #5C615E; }'}</style>
      </div></div>
      
  );
}


  
}
export default App;
