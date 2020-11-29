import React, { useState } from "react";
import { Styled } from "./InputBox.styles";
import { MessageApi as messageApi } from "../../api/Message.api";
import socket from "../../config/socket";

export function InputBox(props: any) {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value.length > 0) {
      // messageApi.sendMessage({
      // })
    }
  };

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
