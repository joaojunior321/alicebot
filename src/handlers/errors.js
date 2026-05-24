const { randomUUID } = require("crypto");

process.on("unhandledRejection", async (reason, promise) => {
 const errorMessage = `Error: ${reason?.message ?? reason}`;
 const errorId = randomUUID();

 console.error(`[${errorId}] ${errorMessage}`);
});

module.exports = process;
