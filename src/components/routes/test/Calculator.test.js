import { render } from '@testing-library/react';
import CalculatorPage from '../Calculator';

test('renders Home component', () => {
  const { asFragment } = render(<CalculatorPage />);
  expect(asFragment()).toMatchSnapshot();
});