import React, {Component} from "react";
import "../styles/GeneralInformation.css"


class GeneralInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { handleOnChange, name, email, phoneNumber } = this.props;

        return (
            <div className="general-information-div">
                <h3 className="subtitle subtitle-general-information">Personal Information</h3>
                <input className="input name-input" type="text" placeholder="Name" onChange={handleOnChange} name="name" value={name}/>
                <input className="input email-input" type="email" placeholder="Email" onChange={handleOnChange} name="email" value={email}/>
                <input className="input phone-number-input" type="tel" placeholder="Phone Number" onChange={handleOnChange} name="phoneNumber" value={phoneNumber}/>
            </div>
        )
    }
}

export default GeneralInformation;