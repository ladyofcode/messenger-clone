import React, { useState } from "react";
import { Styled } from "./InputBox.styles";
import { MessageApi as messageApi } from "../../api/Message.api";
import socket from "../../config/socket";
import { useGroup } from "../../hooks/services/useGroup";
import { MessageDTO } from "../../common/dto/message-dto";
import { UserDTO } from "../../common/dto/user-dto";
import { useAuth } from "../../hooks/services/useAuth";

export function InputBox(props: any) {
  const { group, setMessages } = useGroup();
  const { user } = useAuth();
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

      setMessages((curr: MessageDTO[]) => {
        const _user = group.users.find((u: UserDTO) => u.id === user!.id);
        const newMessages = [
          ...curr,
          {
            createdAt: Date.now(),
            content: value,
            groupId: group.id,
            sender: _user,
          },
        ];
        return newMessages;
      });
    }

    setValue("");
  };

  return (
    <Styled.MessageEntry>
      <div>
        <span role="img">😬</span>
        <span role="img">😬</span>
        <span role="img">😬</span>
        <span role="img">😬</span>
        <span role="img">😬</span>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="inputText"
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => e.keyCode === 13 && handleSubmit(e)}
        ></textarea>
        <button className="sendButton">Send</button>
      </form>
    </Styled.MessageEntry>
  );
}
