import React from "react";
import { useLocation } from "react-router-dom";
import ChatWindow from "../../layouts/ChatWindow/ChatWindow";

const Chat: React.FC = () => {
  const location = useLocation();
  console.log(location);

  return <ChatWindow />;
};

export default Chat;
