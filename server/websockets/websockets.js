module.exports = io => {
  console.log("Websocket Ready");
  io.on("connect", socket => {
    console.log("user connected");
    socket.on("messages", obj => {
      console.log("message send",obj);
      io.emit("message", obj);
    })
    socket.on("disconnect", function(){
        console.log("user disconected")
    });
  });
};
