import './App.css';
import React, {Component} from "react";
import InputDetails from "./components/InputDetails.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <InputDetails></InputDetails>
      </div>
    )
  }
}

export default App;