const mongoose = require("mongoose");

const app = require("./app");
const { config } = require("./config");

// Uncaught Exception: Gracefully off the server
process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

// Connect Database
mongoose
  .connect(config.MONGODB_URI)
  .then(() => console.log("Database connceted successfully ✅"))
  .catch((err) => console.log(`Unable to connect MongoDB ❌ ${err}`));

// Listen to Server
const server = app.listen(config.PORT, () => {
  console.log("Application is listening ✅");
});

// Unhandled Rejection: Gracefully off the server
process.on("unhandledRejection", (error) => {
  console.log(`Unhandled Reject is closing the server ❌ ${error}`);

  if (server) {
    server.close(() => {
      console.log("Server closed due to unhandled rejection ❌");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// SIGTERM
process.on("SIGTERM", () => {
  console.log("Sigterm is triggered ⚒️");
  if (server) server.close();
});
