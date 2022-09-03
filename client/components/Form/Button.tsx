const Button = (props: any):JSX.Element => {
  const { type, name, onClick } = props;
  return (
    <button type={type} onClick={onClick} {...props}>
      {name}
    </button>
  );
};

export default Button;
