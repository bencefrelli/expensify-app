import React from 'react';
import { shallow} from 'enzyme';
import { ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow( <ExpensesSummary expenseCount={1} expensesTotal={213}/>);
  expect( wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow( <ExpensesSummary expenseCount={13} expensesTotal={2123323}/>);
  expect( wrapper).toMatchSnapshot();
});
