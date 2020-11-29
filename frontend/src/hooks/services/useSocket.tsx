// import React, { createContext, useContext, useState } from "react";
// import { buildSocket } from "../../config/socket";

// interface ISocketContext {
//   socket: SocketIOClient.Socket;
// }

// const socketContext = createContext<ISocketContext | null>(null);

// interface ISocketProviderProps {
//   children: JSX.Element;
// }

// export const SocketProvider = ({ children }: ISocketProviderProps) => {
//   const data = useSocketProvider();
//   return (
//     <socketContext.Provider value={data}>{children}</socketContext.Provider>
//   );
// };

// const _socket = buildSocket();
// export const useSocket = (): ISocketContext => {
//   return useContext(socketContext) as ISocketContext;
// };

// const useSocketProvider = () => {
//   const [socket] = useState<SocketIOClient.Socket>(_socket);

//   return { socket };
// };

export {};
