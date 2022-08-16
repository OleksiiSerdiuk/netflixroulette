import { render } from '@testing-library/react';
import Textarea from './Textarea';
import { Formik } from 'formik';
describe('textarea', () => {
  test('renders textarea snapshot', () => {
    const { asFragment } = render(
      <Formik>
        <Textarea
          id='test'
          control='textarea'
          label='Overview'
          name='overview'
        />
      </Formik>
    );
    expect(asFragment(<Textarea />)).toMatchSnapshot();
  });
});
