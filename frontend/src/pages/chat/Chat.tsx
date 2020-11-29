import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { MessageApi as messageApi } from "../../api/Message.api";
import { useGroup } from "../../hooks/services/useGroup";
import ChatWindow from "../../layouts/ChatWindow/ChatWindow";

const Chat: React.FC = () => {
  const { params } = useRouteMatch();
  const { setMessages } = useGroup();

  useEffect(() => {
    // @ts-ignore
    messageApi.getGroupMessages(params!.id).then(({ data }) => {
      setMessages(data || []);
    });
  }, [params, setMessages]);

  return <ChatWindow />;
};

export default Chat;
