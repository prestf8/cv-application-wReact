

import React, {Component} from "react";
import "../styles/EducationSub.css"


class EducationSub extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, school, titleOfStudy, eduFrom, eduTo, deleteEducation, handleOnChange} = this.props;

        return (
            <div className="education-sub-div" data-id={id}>
                <input className="input school-input" type="text" name="school" placeholder="School" value={school} onChange={handleOnChange}/>
                <input className="input title-of-study-input" type="text" name="titleOfStudy" placeholder="Title of Study" value={titleOfStudy} onChange={handleOnChange}/>
                <input className="input edu-from-input" type="text" name="eduFrom" placeholder="From" value={eduFrom} onChange={handleOnChange}/>
                <input className="input edu-to-input" type="text" name="eduTo" placeholder="To" value={eduTo} onChange={handleOnChange}/>
                <button className="delete-education-btn delete-add-btn" type="text" onClick={deleteEducation}>Delete</button>            
            </div>
        )
    }
}

export default EducationSub;