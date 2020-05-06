import React from 'react';
import App from './App';

it('should renders form', () => {
  const wrapper = (<App />);
  expect(wrapper.type('Button'))
});
