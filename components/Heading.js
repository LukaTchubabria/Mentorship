const Heading = (props) => {
  const HeadingTag = props.headingTag;
  return <HeadingTag className={props.className}>{props.text}</HeadingTag>;
};

export default Heading;
