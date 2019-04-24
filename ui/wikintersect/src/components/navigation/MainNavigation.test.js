import React from 'react';
import MainNavigationContainer from './MainNavigation.container';

import { shallow } from 'enzyme';
it('displays the MainNavigation correctly', () => {
    const component = shallow(<MainNavigationContainer/>)

    expect(component).toMatchSnapshot();
})
