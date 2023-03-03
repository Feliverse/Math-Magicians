import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';

test('renders Calculator component', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});

test('User click on buttons', () => {
  const handleClick = jest.fn();
  render(<button type="button" onClick={handleClick} className="btn">AC</button>);
  const button = screen.getByText('AC');
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});