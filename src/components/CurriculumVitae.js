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
                <div>
                    <h4 className="cv-main-subtitle">Experience</h4>
                    {workExperience.map((experience) => {
                        return (
                        <div key={experience.id} className="subcomponent">
                            <div className="subcomponent-left">
                                <p className="time-range"><span>{experience.weFrom}</span> to <span>{experience.weTo}</span></p>
                            </div>
                            
                            <div className="subcomponent-right">
                                <h6 className="company-name">{experience.companyName},&nbsp;</h6>
                                <p>{experience.title},&nbsp;</p>
                                <p>{experience.description}&nbsp;</p>
                            </div>

                        </div>)
                    })}
                </div>
                <div>
                    <h4 className="cv-main-subtitle">Education</h4>
                    {education.map((educationComponent) => {
                        return (
                        <div key={educationComponent.id} className="subcomponent">
                            <div className="subcomponent-left">
                                <p className="time-range"><span>{educationComponent.eduFrom}</span> to <span>{educationComponent.eduTo}</span></p>
                            </div>

                            <div className="subcomponent-right">
                                <h6 className="school">{educationComponent.school},&nbsp;</h6>
                                <p>{educationComponent.titleOfStudy}</p>
                            </div>

                        </div>)
                    })}
                </div>

            </div>
        </div>
    )
}

export default CurriculumVitae;