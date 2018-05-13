import React from 'react';
import { shallow} from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('should ExpenseDashboard render', () => {
  const wrapper = shallow(<ExpenseDashboard />);
  expect( wrapper).toMatchSnapshot();
});
