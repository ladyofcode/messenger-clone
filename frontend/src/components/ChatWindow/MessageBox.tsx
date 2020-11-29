import { useEffect } from "react";
import { MessageDTO, UserDTO } from "../../common/dto";
import { useGroup } from "../../hooks/services/useGroup";
import socket from "../../config/socket";
import { Message } from "./Message";
import { Styled } from "./MessageBox.styles";

export function MessageBox(props: any) {
  const { group, messages, setMessages } = useGroup();

  useEffect(() => {
    socket.on("message", (data: MessageDTO) => {
      setMessages((curr: MessageDTO[]) => {
        const _user = group.users.find((u: UserDTO) => u.id === data.sender.id);
        const newMessages = [...curr, { ...data, sender: _user }];
        return newMessages;
      });
    });
  }, [setMessages, group]);

  return (
    <Styled.MessageBox>
      <div className="header"></div>
      {messages.map((m: MessageDTO) => (
        <Message {...m} key={m.id} />
      ))}
    </Styled.MessageBox>
  );
}
