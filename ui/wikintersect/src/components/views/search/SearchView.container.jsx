import {Component} from 'react';

import SearchViewComponent from './SearchView.component';
import "./SearchView.css";

class SearchViewContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            results: null
        }
    }

    handleSearchUpdated = (results) => {

        this.setState({
            results
        });
    }

    handleSearchClick = (value) => {
        this.props.api.getSearch(value, this.handleSearchUpdated)
    }

    render() {
        const events = {
            handleSearchClick: this.handleSearchClick
        }

        const {results} = this.state;

        return (
           SearchViewComponent({
               events,
               results
           })
        );
    }
}

export default SearchViewContainer;