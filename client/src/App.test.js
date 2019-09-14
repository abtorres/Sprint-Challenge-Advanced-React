import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import NavBar from './components/NavBar'

test('App renders', async() => {
  await render(<App />);
})

test('NavBar renders', async() => {
  await render(<NavBar />);
})