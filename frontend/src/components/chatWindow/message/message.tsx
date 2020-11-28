import styled from 'styled-components';

export function Message(props) {
  return (
    <div className="message">
      { props.username &&
        <div className="username">
          <p>{ props.username } says:</p>
        </div>
      }
      <div className="text">
        <p>{ props.text }</p>
      </div>
    </div>
  );
}


