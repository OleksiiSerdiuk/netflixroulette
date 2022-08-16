import Footer from './Footer';
import { render } from '@testing-library/react';

describe('Footer', () => {
  test('renders Footer snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});
