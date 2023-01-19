import React from "react";
import "../styles/EducationSub.css"

function EducationSub(props) {
    const {id, school, titleOfStudy, eduFrom, eduTo, deleteEducation, handleOnChange} = props;

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

export default EducationSub;