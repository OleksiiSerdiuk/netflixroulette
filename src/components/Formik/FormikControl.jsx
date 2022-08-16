import Input from '../common/Input';
import Textarea from '../common/Textarea';
import { Select } from '../common/Select';
import DatePickerField from '../common/Datepicker';

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'datepicker':
      return <DatePickerField {...rest} />;
    case 'select':
      return <Select {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
