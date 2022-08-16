import { useState } from 'react';
import PropTypes from 'prop-types';
import './select.scss';

//TODO Need to connect plugin with checkbox for select options.
const Select = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.placeholder || '');
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    props.change(value);
    setIsOpen(false);
  };

  const renderItem = (item) => {
    const { id, option } = item;

    return (
      <li
        key={id}
        className='base-select__item'
        onClick={() => onOptionClicked(option)}
        aria-hidden='true'
      >
        {option}
      </li>
    );
  };

  return (
    <div className={`base-select ${props.class ?? ''}`}>
      {props.label && <span className='base-select__label'>{props.label}</span>}
      <div
        className='base-select__header'
        onClick={clickHandler}
        aria-hidden='true'
      >
        {selectedOption}
        <span
          className={`base-select__icon ${isOpen && 'select__icon-open'}`}
        ></span>
      </div>
      {isOpen && (
        <ul className='base-select__list'>{props.list.map(renderItem)}</ul>
      )}
    </div>
  );
};

const propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      option: PropTypes.string.isRequired,
    })
  ),
};
const defaultProps = {
  list: [],
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
