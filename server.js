const { Server } = require("socket.io");
const { createServer } = require("http");
const express = require("express");
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);
const dns = require("dns");

io.on("connection", (socket) => {
  socket.on("startConenction", () => {
    socket.broadcast.emit("thisWorks", { name: "christina" });
    console.log("started socket server");
  });
});
io.listen(3000);
