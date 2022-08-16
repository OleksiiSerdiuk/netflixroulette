import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import DatePickerField from './Datepicker';
import '@testing-library/jest-dom/extend-expect';

describe('datepicker', () => {
  test('renders datepicker snapshot', () => {
    const { asFragment } = render(
      <Formik>
        <DatePickerField
          control='datepicker'
          label='Release Date'
          name='release_date'
        />
      </Formik>
    );
    expect(asFragment(<DatePickerField />)).toMatchSnapshot();
    expect(screen.getByText(/Release Date/i)).toBeInTheDocument();
  });
});
