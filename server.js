require("dotenv").config();
const morgan = require("morgan");
const winston = require("./config/winston");
const server = require("express")();

server.use(morgan("combined", { stream: winston }));

server.get("/", (req, res) => {
  res.send("Hello world!");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.info(`Server listening on port: ${PORT}`);
});
