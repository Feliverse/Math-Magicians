import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

test('renders Header component', () => {
  const { asFragment } = render(<Router><Navbar /></Router>);
  expect(asFragment()).toMatchSnapshot();
});
