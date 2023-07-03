const Text = (props: { content: string }) => {
  const { content } = props;
  return <div className="text">{content}</div>;
}

const Message = () => {
  const content1 = "This is parent component.";
  const content2 = "Message uses text component.";

  return (
    <div className="message">
      <Text content={content1} />
      <Text content={content2} />
    </div>
  );
}

export default Message;