import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newItem:"",
       list:[]
    }
  }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    });
  }


  addItem(){
    //create itrem with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    //copy of current list of items
    const list = [...this.state.list];
    //add new item to list
    list.push(newItem);
    //update state with new list & reset newItem input
    this.setState({
      list,
      newItem:""
    })


  }

  deleteItem(id){
    //copy current list of item
    const list = [...this.state.list];
    //filter out item that is deleted
    const updatedList = list.filter(item => item.id != id);
    this.setState({list: updatedList});

  }

  render() {
    return (
      <div className="App">
               <h1 className="app-title">MY LIST</h1>
      <div className="container">
        <div 
           style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}> 
            Add an Item.. <br/>
            <input
              type="text"
              placeholder="Type Item here"
              value={this.state.newItem}
              onChange={e => this.updateInput('newItem', e.target.value)}
            />
            <button className="add-btn btn-floating" onClick={() => this.addItem()}>
              Add
            </button>
          
            <ul> 
            
              {this.state.list.map(item => {
                return(
             
             <li key={item.id}> 
                           {item.value} 
                              <button className="btn btn-floating" onClick = {
                                       () => this.deleteItem(item.id)}> 
                                                    X </button>
                  </li>
                )
              })}
            </ul>
        </div>
        

      </div></div>
    );
  }
}

export default App;
