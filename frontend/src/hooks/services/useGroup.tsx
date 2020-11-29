import React, { createContext, useContext, useState } from "react";
import { GroupResponseDTO } from "../../common/dto/group-dto";

interface IGroupContext {
  group: any;
  setGroup: any;
  messages: any;
  setMessages: any;
}

const groupContext = createContext<any>(null);

interface IGroupProviderProps {
  children: JSX.Element;
}

export const GroupProvider = ({ children }: IGroupProviderProps) => {
  const data = useGroupProvider();
  return <groupContext.Provider value={data}>{children}</groupContext.Provider>;
};

export const useGroup = (): IGroupContext => {
  return useContext(groupContext) as IGroupContext;
};

const useGroupProvider = () => {
  const [group, setGroup] = useState<GroupResponseDTO | null>(null);
  const [messages, setMessages] = useState<[]>([]);

  return { group, setGroup, messages, setMessages };
};
