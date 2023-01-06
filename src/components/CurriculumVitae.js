import React, {useState} from 'react';
import "../styles/CurriculumVitae.css";

function CurriculumVitae(props) {
    // const [details, setDetails] = useState({})

    const {name, email, phoneNumber, workExperience, education} = props;

    return (
        <div className="cv">
            <header>
                <h2 className="header-component name-display">{name}</h2>
                <h4 className="header-component email-display">{email}</h4>
                <h4 className="header-component phone-number-display">{phoneNumber}</h4>
            </header>
            <div className="cv-main">

            </div>
        </div>
    )
}

export default CurriculumVitae;