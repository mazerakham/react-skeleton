import React, { Component} from "react";
import "./App.css";
import "testpkg/teststyles.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <button Class="btn-class">Button</button>
        <div Class="testclass">Some text</div>
      </div>
    );
  }
}

export default App;
