const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chatMessage", (msg) => {
      io.emit("chatMessage", msg);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

export default socketHandler;
