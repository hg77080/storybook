import PropTypes from "prop-types"

const Checkbox = ({ label, checked, onChange, disabled }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
    label:PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  }
  
export default Checkbox;