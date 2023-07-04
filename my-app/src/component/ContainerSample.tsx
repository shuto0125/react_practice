import React from 'react';

// Define type of Container's props
type ContainerProps = {
  title: string;
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { title, children } = props;
  return (
    <div style={{ background: 'red' }} className="container">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

const Parent = (): JSX.Element => {
  return (
    <Container title="Hello_________">
      <div>container sample</div>
    </Container>
  );
}

export default Parent;