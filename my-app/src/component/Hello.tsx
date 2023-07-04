const Hello = () => {
  const onClick = () => {
    alert("Hello");
  };

  const text = 'hi there';

  return (
    <div onClick={onClick}>
      {text}
    </div>
  );
};

export default Hello;