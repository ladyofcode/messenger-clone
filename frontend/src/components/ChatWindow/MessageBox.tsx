import { Message } from './Message';
import { Styled } from "./MessageBox.styles";

export function MessageBox(props: any) {
  return (
    <Styled.MessageBox>
      <div className="header"> {/* only contains the 'To:...' field */} </div>
      {/* <div className="messages"> */}
        {/* { props.messages.map( m => (<Message name={m.name} text={m.text} ></Message>)) } */}
      {/* </div> */}
      <Message text="Some random af messaging going on up in here" name="Loganette" />
      <Message text="Some random af messaging going on up in here" name="Loganette" />
      <Message text="Some veeeeeeeeeeery random af messaging going on up in here" name="Loganette" />
      <Message text="Some random af messaging going on up in here" name="Loganette" />
      <Message text="Some random af messaging going on up in here" name="Loganette" />
      <Message text="Some veeeeeeeeeeery random af messaging going on up in here" name="Loganette" />
      <Message text="Some random af messaging going on up in here" name="Loganette" />
      <Message text="Some random af messaging going on up in here" name="Loganette" />
      <Message text="Some veeeeeeeeeeery random af messaging going on up in here" name="Loganette" />
    </Styled.MessageBox>
  );
}
