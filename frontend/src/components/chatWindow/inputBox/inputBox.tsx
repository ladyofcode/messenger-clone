export function InputBox(props) {
  return (
    <div className="inputBox">
      <div className="header"> {/* header elements */} </div>
      <div className="textArea">
        <textarea className="inputText"></textarea>
        <button className="sendButton">Send</button>
      </div>
      <div className="footer"> {/* for style only, not doing handwriting so no buttons */} </div>
    </div>
  );
}
