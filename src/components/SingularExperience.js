import React from "react";
import "../styles/SingularExperience.css"


function SingularExperience(props) {
    const {id, companyName, title, description, weFrom, weTo, deleteExperience, handleOnChange} = props;
    return (
        <div className="singular-experience-div" data-id={id}>
            <input className="input company-name-input" type="text" placeholder="Company Name" name="companyName" value={companyName} onChange={handleOnChange}/>
            <input className="input title-input" type="text" placeholder="Title" name="title" value={title} onChange={handleOnChange}/>
            <input className="input description-input" type="text" placeholder="Description" name="description" value={description} onChange={handleOnChange}/>
            <input className="input we-from-input" type="text" placeholder="From" name="weFrom" value={weFrom} onChange={handleOnChange}/>
            <input className="input we-to-input" type="text" placeholder="To" name="weTo" value={weTo} onChange={handleOnChange}/>
            <button className="delete-experience-btn delete-add-btn" onClick={deleteExperience}>Delete</button>
        </div>
    )
}

export default SingularExperience;