import {Component} from 'react';
import CheckboxComponent from "./Checkbox.component";

class CheckboxContainer extends Component {

    handleChange = (evt) => {
        this.props.handleChange(this.props.row)
    }

    render() {
        const events = {
            handleChange: this.handleChange
        }

        const {checkedState} = this.props

        return CheckboxComponent({events, checkedState});
    }
}

export default CheckboxContainer;