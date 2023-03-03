import { render } from '@testing-library/react';
import Home from '../Home';

test('renders Home component', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});