import React from 'react';
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
 const wrapper = rtl.render(<App />);

 const element;
 expect(element).toBeTruthy(); // jest matcher
 expect(element).toBeInTheDocument(); // jest-dom matcher
 expect(element).toBeVisible(); // jest-dom matcher
});