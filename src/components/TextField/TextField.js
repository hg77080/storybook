import PropTypes from "prop-types"
const TextField = ({
  label,
  id,
  isDisabled,
  isRequired,
  placeholder,
  error,
}) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span
        className="mb-1 text-sm"
        style={{ marginBottom: "4px", fontSize: "14px" }}
      >
        {label}
        <span style={{ fontWeight: "bold",color:isRequired?'red':'' }}>
          {isRequired ? "*" : ""}
        </span>
      </span>
      <input
        placeholder={'Enter Name'}
        autoComplete="off"
        disabled={isDisabled}
        id={id}
        type="text"
        style={{marginLeft:"1rem"}}
      />
      <span style={{ color: "red", fontWeight: "600", fontSize: "14px" }}>
        {error}
      </span>
    </label>
  );
};

TextField.propTypes = {
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
  }
export default TextField
