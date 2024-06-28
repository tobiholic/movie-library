function Message() {
  const name = 'Tobi';
  let nickname = 'tobiholic';

  if (name) {
    return (
      <h1>
        Hello {name}
        {' aka ' + nickname + '!'}
      </h1>
    );
  } else {
    return <h1>Hello world!</h1>;
  }
}

export default Message;
