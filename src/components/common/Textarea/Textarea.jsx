import './textarea.scss';
import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError';

const Textarea = (props) => {
  const { label, name, type, ...rest } = props;

  return (
    <label className='base-textarea'>
      <span className='base-textarea__label'>{label}</span>
      <Field
        as='textarea'
        id={name}
        name={name}
        className='base-textarea__field'
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </label>
  );
};

export default Textarea;
