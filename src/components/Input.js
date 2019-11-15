import React from "react";
import PropTypes from "prop-types";
import { FormControl } from "react-bootstrap";

const Input = props => {
  const {
    name,
    type,
    placeholder,
    required,
    value,
    onChange,
    // disabled,
    // errorMessage,
    // label,
  } = props;

  return (
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-md-2"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        type={type}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        placeholder={placeholder}
        name={name}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string.isRequired,
  classname: PropTypes.string
};
export default Input;
