require("dotenv").config();
const app = require("./src/app");

function printRoutes(stack, prefix = "") {
  stack.forEach(middleware => {
    if (middleware.route) {
      const path = prefix + middleware.route.path;
      const methods = Object.keys(middleware.route.methods);
      console.log(`  ${methods.join(", ").toUpperCase().padEnd(10)} ${path}`);
    } else if (middleware.name === "router" && middleware.handle.stack) {
      const routerPrefix = prefix + (middleware.regexp.source.match(/\/[^$]*/)?.[0] || "");
      printRoutes(middleware.handle.stack, routerPrefix);
    }
  });
}

console.log("\n=== Registered Routes ===\n");
printRoutes(app._router.stack);
console.log("\n");
