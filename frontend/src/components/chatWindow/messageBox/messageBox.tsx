import { Message } from '../message';

export function MessageBox(props) {
  return (
    <div className="messageBox">
      <div className="header"> {/* only contains the 'To:...' field */} </div>
      <div className="messages">
        { props.messages.map( m => (<Message name={m.name} text={m.text} ></Message>)) }
      </div>
    </div>
  );
}
