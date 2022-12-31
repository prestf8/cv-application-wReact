import React, {Component} from "react";
import "../styles/GeneralInformation.css"


class GeneralInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="general-information-div">
                <input class="input name-input" type="text" />
                <input class="input email-input" type="email" />
                <input class="input phone-number-input" type="tel" />
            </div>
        )
    }
}

export default GeneralInformation;