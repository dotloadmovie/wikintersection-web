import React, {Component} from 'react'

import SearchResultViewComponent from './SearchResultView.component'
import CheckboxContainer from '../../forms/checkbox/Checkbox.container'

class SearchResultViewContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedValue: null,
        }
    }

    handleChange = (checkedValue) => {
        this.setState({
            checkedValue
        })
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
                return (<CheckboxContainer handleChange={this.handleChange} keyValue={row.key} checkedState={this.state.checkedValue === row.key} />)
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

export default SearchResultViewContainer;