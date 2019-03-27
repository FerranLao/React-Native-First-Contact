module.exports = io => {
  console.log("Websocket Ready");
  io.on("connection", socket => {
    console.log("user connected");
    socket.on("messages", obj => {
      console.log("message send",obj);
      io.emit("messages", obj);
    })
    socket.on("disconnect", function(){
        console.log("user disconected")
    });
  });
};
