const Option = (props: any): JSX.Element => {
  const { value, displayValue } = props;
  return (
    <option value={value} {...props}>
      {displayValue}
    </option>
  );
};

export default Option;
