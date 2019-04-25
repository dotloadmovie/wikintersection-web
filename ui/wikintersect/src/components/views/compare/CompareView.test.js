import React from 'react';
import {CompareViewContainer} from './CompareView.container';

import { shallow } from 'enzyme';
import {SearchViewContainer} from "../search/SearchView.container";

it('displays properly with a result set', () => {
    const props = {};
    props.results = ["386BSD","A/UX","Android (operating system)","Apache HTTP Server","AudioOS","BSD/OS","BSD Daemon"];

    const component = shallow(<CompareViewContainer {...props}/>)

    expect(component).toMatchSnapshot();
})