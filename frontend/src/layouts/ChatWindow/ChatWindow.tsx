import React from "react";
import { Menu } from "../../components/ChatWindow/Menu";
import { Avatar } from "../../components//ChatWindow/Avatar";
import { MessageBox } from "../../components//ChatWindow/MessageBox";
import { InputBox } from "../../components//ChatWindow/InputBox";
import { Styled } from "./ChatWindow.styles";
import socket from "../../config/socket";

// @ts-ignore
// dumb shit does not work
// const ChatBoxWindow: React.FC = (props) => {
//   const containerEl = useRef(document.createElement("div"));
//   let externalWindow = useRef<any>(null);

//   React.useEffect(() => {
//     externalWindow.current = window.open("", "ChatBox");

//     if (externalWindow.current) {
//       externalWindow.current.document.body.appendChild(containerEl.current);
//       // @ts-ignore
//       externalWindow.current.onunload = () => props.onClose();
//     }
//   }, [containerEl, props]);

//   return createPortal(props.children, containerEl.current);
// };

export default function ChatWindow(props: any) {
  return (
    <Styled.Container>
      <Menu />
      <div>
        <Avatar />
        <Avatar />
      </div>
      <div>
        <MessageBox />
        <InputBox />
      </div>
    </Styled.Container>
  );
}
