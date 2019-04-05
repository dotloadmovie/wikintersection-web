import {Component} from 'react'
import CompareViewComponent from "./CompareView.component";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        results: state.compareResult
    }
}

class CompareViewContainer extends Component {
    render() {

        if(!this.props.results) {
            return null
        }

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
        }, {
            title: 'Article',
            dataIndex: 'value',
            key: 'value'
        }];

        return CompareViewComponent({
            data,
            columns
        })
    }
}

const CompareViewContainerConnected = connect(mapStateToProps)(CompareViewContainer)

export default CompareViewContainerConnected;