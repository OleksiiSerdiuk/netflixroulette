import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './datePicker.scss';

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div className='base-datepicker'>
      {props.label && (
        <span className='base-datepicker__label'>{props.label}</span>
      )}
      <DatePicker
        {...field}
        {...props}
        dateFormat='yyyy-mm-dd'
        className='base-datepicker__input'
        selected={(field.value && moment(field.value).toDate()) || null}
        onChange={(val) => {
          setFieldValue(field.name, moment(val).format('YYYY-MM-DD'));
        }}
      />
    </div>
  );
};

export default DatePickerField;
