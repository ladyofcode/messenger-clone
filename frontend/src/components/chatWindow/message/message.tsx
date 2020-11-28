export function Message(props) {
  return (
    <div className="message">
      { props.name &&
        <div className="username">
          <p>{ props.name } says:</p>
        </div>
      }
      <div className="text">
        <p>{ props.text }</p>
      </div>
    </div>
  );
}
