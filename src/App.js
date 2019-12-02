import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css';
import 'C:/Users/Divyanshu/node_modules/bootstrap/dist/css/bootstrap.css'
import './plus'
import lists from "./lists"
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
  return (
    <div >
      <span className="App " >Todo
        </span>
        <div>
          <form onSubmit={this.addItem}>
        <button type="submit" className="button btn btn-secondary btn-sm ">+</button>
        
          <input ref = {(a) => this._inputElement =a} className="input"></input>
          </form>
          </div>
          <lists entries = {this.state.items}/>
        <style>{'body { background-color: #5C615E; }'}</style>
      </div>
      
  );
}


  
}
export default App;
