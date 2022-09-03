const Input = (props: any) => {
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
