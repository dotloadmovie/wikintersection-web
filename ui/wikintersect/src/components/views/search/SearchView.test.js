import React from 'react';
import {SearchViewContainer} from './SearchView.container';

import { shallow } from 'enzyme';

const props = {
    search0: {rowKey: null, value: null, search: null, results: null, serverRequestInFlight: false},
    search1: {rowKey: null, value: null, search: null, results: null, serverRequestInFlight: false},
    currView: 'search',
    index: 0,
    placeholder: "Search for a first Wikipedia entry"
}

it('displays correctly in default mode', () => {
    const component = shallow(<SearchViewContainer {...props}/>)

    expect(component).toMatchSnapshot();
})

it('displays correctly with a spinner', () => {
    props.search0.serverRequestInFlight = true;
    const component = shallow(<SearchViewContainer {...props}/>)

    expect(component).toMatchSnapshot();
})


it('displays properly with a result set', () => {
    props.search0.serverRequestInFlight = false;
    props.search0.results = ["386BSD","A/UX","Android (operating system)","Apache HTTP Server","AudioOS","BSD/OS","BSD Daemon"];

    const component = shallow(<SearchViewContainer {...props}/>)

    expect(component).toMatchSnapshot();
})


