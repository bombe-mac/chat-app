import { startServer } from "./ws/server.js";

const port = Number(process.env.PORT) || 8081;

startServer(port);