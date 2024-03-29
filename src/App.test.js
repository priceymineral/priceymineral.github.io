import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import('jest').Config
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = renderer.createElement('div');
    ReactDOM.render(<App />, div);
  })
})