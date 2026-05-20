import { Server } from "socket.io";

export const io = new Server(4001, {
  cors: {
    origin: "*",
  },
});

console.log("Socket.IO running on port 4001");