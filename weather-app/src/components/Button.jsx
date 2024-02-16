import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
