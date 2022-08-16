import './button.scss';

const Button = ({ click, btnClass, disabled, btnText, type }) => (
  <button
    type={type}
    onClick={click}
    className={`btn ${btnClass}`}
    disabled={disabled}
  >
    {btnText}
  </button>
);

export default Button;
