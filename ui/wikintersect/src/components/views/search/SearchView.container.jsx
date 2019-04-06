import {Component} from 'react';
import {connect} from "react-redux";

import {fetchSearchResult, searchValueInput} from '../../../actionCreators/'
import {getURIBase} from "../../../config";

import SearchViewComponent from './SearchView.component';
import "./SearchView.css";


const mapStateToProps = (state) => {
    return {
        currView: state.currView,
        search0: state.search0,
        search1: state.search1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchResult: (url, searchIndex) => {
            return dispatch(fetchSearchResult(url, searchIndex))
        },
        searchValueInput: (value, searchIndex) => {
            return dispatch(searchValueInput(value, searchIndex))
        }
    }
}


class SearchViewContainer extends Component {

    handleSearchValueInput = (evt) => {
        this.props.searchValueInput(evt.target.value, this.props.index);
    }

    handleSearchClick = (value) => {
        this.props.fetchSearchResult(`${getURIBase()}/search/${value}`, this.props.index);
    }

    render() {
        const events = {
            handleSearchClick: this.handleSearchClick,
            handleSearchValueInput: this.handleSearchValueInput
        };

        const {index, placeholder} = this.props;

        const serverRequestInFlight = this.props['search' + index].serverRequestInFlight;
        const searchValue = this.props['search' + index].value;
        const results = this.props['search' + index].results;


        return (
           SearchViewComponent({
               events,
               results,
               index,
               placeholder,
               searchValue,
               serverRequestInFlight
           })
        );
    }
}



const SearchViewContainerConnected = connect(mapStateToProps, mapDispatchToProps)(SearchViewContainer)

export default SearchViewContainerConnected;