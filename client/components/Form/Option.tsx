const Option = (props: any) => {
  const { value, displayValue } = props;
  return (
    <option value={value} {...props}>
      {displayValue}
    </option>
  );
};

export default Option;
