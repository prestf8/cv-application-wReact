import './App.css';
import React, {Component} from "react";
import GeneralInformation from "./components/GeneralInformation";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <GeneralInformation></GeneralInformation>
    )
  }
}

export default App;