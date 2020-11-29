import React, { useState } from "react";
import { Styled } from "./InputBox.styles";
import { MessageApi as messageApi } from "../../api/Message.api";
import socket from "../../config/socket";
import { useGroup } from "../../hooks/services/useGroup";

export function InputBox(props: any) {
  const { group } = useGroup();
  const [value, setValue] = useState<string>("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value.length > 0) {
      messageApi.sendMessage({
        groupId: group.id,
        message: value,
      });
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
      <form onSubmit={handleSubmit}>
        <textarea
          className="inputText"
          value={value}
          onChange={handleChange}
        ></textarea>
        <button className="sendButton">Send</button>
      </form>
    </Styled.MessageEntry>
  );
}
