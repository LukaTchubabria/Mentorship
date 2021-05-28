const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

export default Input;
