const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  res.sendFile(__dirname + "/pagetwo.html");
});
app.listen(3000, function () {
  console.log("Server is running on localhost3000");
});
if (true) {
  console.log("this is true");
} else {
  console.log("false");
}
