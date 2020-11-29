import { Styled } from './InputBox.styles';

export function InputBox(props: any) {
  return (
    <Styled.MessageEntry>
      <div> 
        <img></img>
        <img></img>
        <img></img>
        <img></img>
        <img></img>
      </div>
      <form>
        <textarea className="inputText"></textarea>
        <button className="sendButton">Send</button>
      </form>
    </Styled.MessageEntry>
  );
}
