import React, {Component} from 'react'
import {connect} from 'react-redux';

import SearchResultViewComponent from './SearchResultView.component'
import CheckboxContainer from '../../forms/checkbox/Checkbox.container'
import {selectRow} from "../../../actionCreators";

const mapStateToProps = (state) => {
    return {
        currView: state.currView,
        search0: state.search0,
        search1: state.search1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectRow: (row, searchIndex) => {
            return dispatch(selectRow(row, searchIndex))
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

        this.props.selectRow(row, this.props.index)
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