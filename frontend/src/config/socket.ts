import socketIOClient from "socket.io-client";
import { constants } from "./constants";

// function buildSocket() {
//   const socket = socketIOClient(constants.SOCKETS_PATH);
//   return socket;
// }

// export { buildSocket };

export default socketIOClient(constants.SOCKETS_PATH);
