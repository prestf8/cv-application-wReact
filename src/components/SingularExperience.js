import React, {Component} from "react";
import "../styles/SingularExperience.css"


class SingularExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, companyName, title, description, weFrom, weTo} = this.props;
        return (
            <div className="singular-experience-div">
                <h3 className="subtitle subtitle-work-experience">Work Experience</h3>
                <input className="input company-name-input" type="text" placeholder="Company Name" name="companyName" value={companyName}/>
                <input className="input title-input" type="text" placeholder="Title" name="title" value={title}/>
                <input className="input description-input" type="text" placeholder="Description" name="description" value={description}/>
                <input className="input we-from-input" type="text" placeholder="From" name="weFrom" value={weFrom}/>
                <input className="input we-to-input" type="text" placeholder="To" name="weTo" value={weTo}/>
                <button class="delete-experience-btn">Delete</button>
            </div>
        )
    }
}

export default SingularExperience;