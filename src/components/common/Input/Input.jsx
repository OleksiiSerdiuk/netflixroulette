import './input.scss';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const Input = (props) => {
  const { label, name, type, customClass, ...rest } = props;

  return (
    <label className={`base-input ${props.customClass ?? ''}`}>
      {props.label && <span className='base-input__label'>{props.label}</span>}
      <Field
        id={name}
        name={name}
        type={type}
        className='base-input__field'
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </label>
  );
};

export default Input;
