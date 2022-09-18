import "./index.scss";

const Dropdown = ({ value, options, onChange }) => {
  return (
    <div className="dropdown-container">
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
