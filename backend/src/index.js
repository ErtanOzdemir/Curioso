const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const helmet = require("helmet");
const { createServer } = require("http");
const authRouter = require("./routes/auth");
const roomsRouter = require("./routes/rooms");
const usersRouter = require("./routes/users");
const { Server } = require("socket.io");

const cors = require("cors");
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

require("dot-env");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

var whitelist = ["http://localhost:3000"];
var corsOptions = {
  origin: whitelist,
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
    }),
  })
);
app.use("/auth", authRouter);
app.use("/rooms", roomsRouter);
app.use("/users", usersRouter);

io.on("connection", (socket) => {
  console.log("Ther is a connection");
});

httpServer.listen(8000, () => {
  console.log("Connected to server");
});
