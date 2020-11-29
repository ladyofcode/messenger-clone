import socketIOClient from "socket.io-client";
import { constants } from "./constants";

const socketIo = socketIOClient(constants.SOCKETS_PATH, {
  transports: ["websocket"],
});

function waitForConnection(): Promise<SocketIOClient.Socket> {
  return new Promise((res) => {
    if (socketIo.connected) {
      res(socketIo);
      return;
    }
    socketIo.on("connect", () => res(socketIo));
  });
}

export { waitForConnection };
export default socketIo;
