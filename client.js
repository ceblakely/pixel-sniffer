const { io } = require("socket.io-client");
socket.on("thisWorks", (data) => {
  document.getElementById("text").innerText = `${data.name}`;
  console.log("wow amazing gurl congratulationz");
});
