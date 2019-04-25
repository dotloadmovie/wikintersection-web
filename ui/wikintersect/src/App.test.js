import React from 'react';
import ReactDOM from 'react-dom';
import AppConnected from './App';

import { shallow } from 'enzyme';
import {Provider} from "react-redux";
import store from "./stores/Store";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
      <AppConnected />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays correctly', () => {
  const component = shallow(<Provider store={store}>
    <AppConnected />
  </Provider>)

  expect(component).toMatchSnapshot();
})
