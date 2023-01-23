const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const roomsRouter = require("./routes/rooms");
require("dot-env");

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
mongoose.set("strictQuery", false);

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
    }),
  })
);
app.use(express.json());
app.use("/users", usersRouter);
app.use("/rooms", roomsRouter);

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});
