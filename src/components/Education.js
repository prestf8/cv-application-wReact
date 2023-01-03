import React, {Component} from "react";
import "../styles/Education.css"
import EducationSub from "./EducationSub";


class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {addEducation, deleteEducation, handleOnChange, educationDetails} = this.props;

        return (
            <div className="education-div">
                <h3 className="subtitle subtitle-education">Education</h3>

                {educationDetails.map((educationSub) => {
                    return <EducationSub key={educationSub.id} id={educationSub.id} school={educationSub.school} titleOfStudy={educationSub.titleOfStudy} eduFrom={educationSub.eduFrom} eduTo={educationSub.eduTo} deleteEducation={deleteEducation} handleOnChange={handleOnChange}></EducationSub>
                })}

                <button className="add-education-btn delete-add-btn" type="button" onClick={addEducation}>Add</button>
            </div>
        )
    }
}

export default Education;