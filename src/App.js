import './App.css';
import React, {Component} from "react";
import InputDetails from "./components/InputDetails.js";
import CurriculumVitae from './components/CurriculumVitae';

class App extends Component {
  constructor() {
    super();

    this.state = {
        name: "",
        email: "",
        phoneNumber: "",
        workExperience: [
            {
              id: "first",
             companyName: "",
             title: "",
             description: "",
             weFrom: "",
             weTo: "",   
            },
        ],
        education: [
            {
                id: "first",
                school: "",
                titleOfStudy: "",
                eduFrom: "",
                eduTo: "",
            }
        ],
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <main className="main-container">
          <InputDetails updateState={this.updateState}></InputDetails>
          <CurriculumVitae name={this.state.name} email={this.state.email} phoneNumber={this.state.phoneNumber} workExperience={this.state.workExperience} education={this.state.education}></CurriculumVitae>
        </main>
      </div>
    )
  }
}

export default App;