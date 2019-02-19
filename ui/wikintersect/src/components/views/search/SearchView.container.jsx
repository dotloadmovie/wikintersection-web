import {Component} from 'react';

import SearchViewComponent from './SearchView.component';
import "./SearchView.css";

class SearchViewContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            results: props.results
        };
    }

    handleSearchValueInput = (evt) => {
        this.props.handleSearchValueInput(evt.target.value, this.props.index);
    }

    handleSearchUpdated = (results) => {
       this.props.handleSearchUpdated(results, this.props.index);
    }

    handleSearchClick = (value) => {
        this.props.api.getSearch(value, this.handleSearchUpdated);
    }

    render() {
        const events = {
            handleSearchClick: this.handleSearchClick,
            handleSelectRow: this.props.handleSelectRow,
            handleSearchValueInput: this.handleSearchValueInput
        };

        const {index, placeholder, results, searchValue} = this.props;

        return (
           SearchViewComponent({
               events,
               results,
               index,
               placeholder,
               searchValue
           })
        );
    }
}

export default SearchViewContainer;