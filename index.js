import startup from "./src/startup.js";
import server from "./src/server.js";
import app from "./src/app.js";

await startup();
await server();
app();
