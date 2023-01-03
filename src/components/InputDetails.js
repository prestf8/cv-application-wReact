import GeneralInformation from "./GeneralInformation";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import uniqid from "uniqid"

import React, {useState} from "react"

function InputDetails(props) {
    const [details, setDetails] = useState({
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
        //     {
        //         id: "",
        //         companyName: "",
        //         title: "",
        //         description: "",
        //         weFrom: "",
        //         weTo: "",       
        //     }
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
    })

    function generalInformationOnChange(e) {
        setDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    function workExperienceOnChange(e) {
        let id=e.target.parentElement.getAttribute("data-id");

        const changedWorkExperience = details.workExperience.map((experience) => {
            if (experience.id == id) {
                return {
                    ...experience,
                    [e.target.name]: e.target.value,
                }
            }
            return experience;
        });

        setDetails((prevState) => ({
            ...prevState,
            workExperience: [
                ...changedWorkExperience
            ]
        }))
    }

    function educationOnChange(e) {
        let id = e.target.parentElement.getAttribute("data-id");

        const changedEducation = details.education.map((educationSub) => {
            if (educationSub.id == id) {
                return {
                    ...educationSub,
                    [e.target.name]: e.target.value,
                }
            }
            return educationSub
        })

        setDetails((prevState) => ({
            ...prevState,
            education: [
                ...changedEducation,
            ]
        }))
    }

    function addExperience(e) {
        e.preventDefault();
        setDetails((prevState) => ({
            ...prevState,
            workExperience: [
                ...prevState.workExperience,
                {
                    id: uniqid(),
                    companyName: "",
                    title: "",
                    description: "",
                    weFrom: "",
                    weTo: "",
                }
            ]
        }))
    }

    function addEducation(e) {
        e.preventDefault();
        setDetails((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: uniqid(),
                    school: "",
                    titleOfStudy: "",
                    eduFrom: "",
                    eduTo: "",
                }
            ]
        }))
    }

    function deleteExperience(e) {
        e.preventDefault();
        let id = e.target.parentElement.getAttribute("data-id");
        let updatedWorkExperience = details.workExperience.filter((experience) => experience.id != id);
        setDetails((prevState) => ({
            ...prevState,
            workExperience: [
                ...updatedWorkExperience
            ]
        }))
    }

    function deleteEducation(e) {
        e.preventDefault();
        let id = e.target.parentElement.getAttribute("data-id");
        let updatedEducation = details.education.filter((eduSub) => eduSub.id != id);
        setDetails((prevState) => ({
            ...prevState,
            education: [
                ...updatedEducation
            ]
        }))
    }


    return (
        <form>
            <GeneralInformation name={details.name} email={details.email} phoneNumber={details.phoneNumber} handleOnChange={generalInformationOnChange}></GeneralInformation>
            <WorkExperience experiences={details.workExperience} addExperience={addExperience} deleteExperience={deleteExperience} handleOnChange={workExperienceOnChange}></WorkExperience>
            <Education educationDetails={details.education} addEducation={addEducation} deleteEducation={deleteEducation} handleOnChange={educationOnChange}></Education>
            <button type="submit">Submit</button>
        </form>
    )
}

export default InputDetails;