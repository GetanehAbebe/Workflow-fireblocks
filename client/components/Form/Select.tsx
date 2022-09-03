import Option from "./Option";

const Select = (props: any) => {
  const { options, onChange, defaultOption, id, name, value } = props;
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <select name={name} id={id} onChange={onChange} value={value}>
        <option>{defaultOption}</option>
        {options &&
          options.map((optionProps: any) => {
            return <Option {...optionProps} />;
          })}
      </select>
    </>
  );
};

export default Select;
