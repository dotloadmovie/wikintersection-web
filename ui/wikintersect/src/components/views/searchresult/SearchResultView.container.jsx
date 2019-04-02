import React, {Component} from 'react'
import {connect} from 'react-redux';

import SearchResultViewComponent from './SearchResultView.component'
import CheckboxContainer from '../../forms/checkbox/Checkbox.container'
import {clearSearch} from "../../../actionCreators";

const mapStateToProps = (state) => {
    return {
        currView: state.currView
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearSearch: () => {
            return dispatch(clearSearch())
        }
    }
}

class SearchResultViewContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedValue: null,
        }
    }

    handleChange = (row) => {
        this.setState({
            checkedValue: row.key
        })

        this.props.handleSelectRow(row, this.props.index)
    }

    render() {
        const data = this.props.results.map((item, i) => {
            return {
                count: i + 1,
                value: item,
                key: i
            }
        });
        const columns = [{
            title: '#',
            dataIndex: 'count',
            key: 'count',
            render: (item, row) => {
                return (<CheckboxContainer handleChange={this.handleChange} row={row} checkedState={this.state.checkedValue === row.key} />)
            }
        }, {
            title: 'Article',
            dataIndex: 'value',
            key: 'value'
        }];

        return (
            SearchResultViewComponent({columns, data})
        );
    }
}

const SearchResultViewContainerConnected = connect(mapStateToProps, mapDispatchToProps)(SearchResultViewContainer)

export default SearchResultViewContainerConnected;