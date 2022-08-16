import { fireEvent, render, waitFor } from '@testing-library/react';
import { ModalDelete } from './index';
import store from '../../../store';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';

const handleSubmit = jest.fn();

describe('modal delete', () => {
  test('renders modal delete snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ModalDelete />
      </Provider>
    );
    expect(asFragment(<ModalDelete />)).toMatchSnapshot();
  });

  it('should handle submit', async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <ModalDelete />
      </Provider>
    );

    await act(() => {
      fireEvent.click(getByRole('button', { type: /submit/i }));
      handleSubmit();
    });
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
