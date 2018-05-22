import authReducer from '../../reducers/auth';

test('should setup the default auth value', () => {
  const state = authReducer( undefined, {type: '@@INIT'});
  expect( state).toEqual({});
});

test('should set uid for LOGIN', () => {
  const uid = 'asjdo2e';
  const state = authReducer( {}, { type: 'LOGIN', uid})
  expect( state.uid).toBe( uid);
});

test('should clear uid for LOGOUT', () => {
  const state = authReducer( { uid: 'asdih'}, { type: 'LOGOUT'})
  expect( state).toEqual({});
});
