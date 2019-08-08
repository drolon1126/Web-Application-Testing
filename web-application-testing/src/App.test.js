import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
 const wrapper = rtl.render(<App />);

 wrapper.getByText(/Balls:/);
 wrapper.getByText(/Strikes:/);
 wrapper.getByText(/Outs:/);
});