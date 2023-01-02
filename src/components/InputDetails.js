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

    // function workExperienceOnChange(e) {

    //     let 

    //     setDetails((prevState) => ({
    //         ...prevState,
    //         workExperience: [
    //             ...prevState.workExperience,
    //             {
    //                 id: uniqid(),

    //             }

    //         ]
    //     }))
    // }

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


    return (
        <form>
            <GeneralInformation name={details.name} email={details.email} phoneNumber={details.phoneNumber} handleOnChange={generalInformationOnChange}></GeneralInformation>
            <WorkExperience experiences={details.workExperience} addExperience={addExperience}></WorkExperience>
            {/* <Education></Education> */}
            <button type="submit">Submit</button>
        </form>
    )
}

export default InputDetails;