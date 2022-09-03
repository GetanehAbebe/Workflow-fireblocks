const Input = (props: any): JSX.Element => {
  const { name, value, id, type, onChange, isRequired } = props;

  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={isRequired}
        {...props}
      />
    </>
  );
};
export default Input;
