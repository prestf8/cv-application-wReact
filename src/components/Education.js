import React, {Component} from "react";
import "../styles/Education.css"


class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-div">
                <h3 className="subtitle subtitle-education">Education</h3>
                <input className="input school-input" type="text" placeholder="School"/>
                <input className="input title-of-study-input" type="text" placeholder="Title of Study"/>
                <input className="input edu-from-input" type="text" placeholder="From"/>
                <input className="input edu-to-input" type="text" placeholder="To"/>
            </div>
        )
    }
}

export default Education;