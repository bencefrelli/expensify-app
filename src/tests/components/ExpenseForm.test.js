import React from 'react';
import { shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow( <ExpenseForm />);
  expect( wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense', () => {
  const wrapper = shallow( <ExpenseForm expense={expenses[1]} />);
  expect( wrapper).toMatchSnapshot();
});

test('should render error for invalid from submission', () =>{
  const wrapper = shallow( <ExpenseForm />);
  expect( wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect( wrapper.state('error').length).toBeGreaterThan(0);
  expect( wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New Description';
  const wrapper = shallow( <ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value}
  });
  expect( wrapper.state( 'description')).toBe(value);
});

test('should set note on  textarea change', () => {
  const value = 'New note value';
  const wrapper = shallow( <ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value}
  });
  expect( wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const value = '23.50';
  const wrapper = shallow( <ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value}
  });
  expect( wrapper.state('amount')).toBe(value);
});

test('should set amount if invalid input', () => {
  const value = '12.222';
  const wrapper = shallow( <ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value}
  });
  expect( wrapper.state('amount').length).toBe(0);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow( <ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect( wrapper.state('error')).toBe('');
  expect( onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    note: expenses[1].note,
    amount: expenses[1].amount,
    createdAt: expenses[1].createdAt
  });
});

test('should set new date onDateChange', () => {
  const now = moment();
  const wrapper = shallow( <ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect( wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused onFocusChange', () => {
  const focused = true;
  const wrapper = shallow( <ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect( wrapper.state('calendarFocused')).toEqual(focused);
});
