require("dotenv").config();
const server = require("express")();

const PORT = process.env.DB_PORT || 3000;

server.get("/", (req, res) => {
  const data = [
    { title: "Hello world!", content: "This is my first blog post. Yay!" }
  ];
  res.json(data);
});

server.listen(PORT, () => {
  console.log(`DB Connector listening on ${PORT}...`);
});
