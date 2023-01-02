import React, {Component} from "react";
import "../styles/WorkExperience.css"

import SingularExperience from "./SingularExperience";


class WorkExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {addExperience, deleteExperience, experiences, handleOnChange} = this.props;

        return (
            <div className="work-experience-div">
                <h3 className="subtitle subtitle-work-experience">Work Experience</h3>
                
                {experiences.map((exp) => {
                    return <SingularExperience key={exp.id} id={exp.id} companyName={exp.companyName} title={exp.title} description={exp.description} weFrom={exp.weFrom} weTo={exp.weTo} deleteExperience={deleteExperience} handleOnChange={handleOnChange}></SingularExperience>
                })}

                <button type="button" className="add-experience-btn" onClick={addExperience}>Add</button>
            </div>
        )
    }
}

export default WorkExperience;



/* 
Create Add Button that:
- Calls a props function that adds an object of experience to the array workexperience with a generated ID
- Another SingularExperience Component is rendered because SingularComponents render based on 
ts corresponding object in the workExperience state array
Create Delete Button
- Calls a props function that deletes an object of experience to the array workexperience based on an ID
*/
