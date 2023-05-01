import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { exit } from "process";
import { cryptoRouter } from "./src/routers";
import { IOEventHandler } from "./src/controllers";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost:5173" } });

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT as string;

app.use("/api/balance", cryptoRouter);
io.on("connection", (socket) => {
  console.log("un usuario se ha conectado ", socket.id);
  const IOHandler = new IOEventHandler(socket);
  IOHandler.initEvents();
});

const startServer = async () => {
  try {
    server.listen(PORT, () => {
      console.log(`[SERVER]: server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log({ error });
    exit(1);
  }
};

startServer();
