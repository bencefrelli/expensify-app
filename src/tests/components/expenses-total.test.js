import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should selectExpensesTotal return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect( res).toBe(0);
});

test('should selectExpensesTotal return correctly', () => {
  const res = selectExpensesTotal( expenses);
  expect( res).toBe(15900);
});

test('should selectExpensesTotal return correctly with single expense', () => {
  const res = selectExpensesTotal( [expenses[0]]);
  expect( res).toBe(250);
});
