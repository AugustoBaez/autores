const express = require("express");
const app = express();
const cors = require("cors");
require("./server/config/mongoose.config");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./server/routes/author.routes");
routes(app);

app.listen(8000, () => {
  console.log("you are now listening at port 8000");
});
