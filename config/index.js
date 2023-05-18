const { config } = require("dotenv");

console.log("NODE_ENV: ", process.env.NODE_ENV);

if (process.env.NODE_ENV !== "prod") {
  config({ path: "./.dev.env" });
} else {
  config({ path: "./.env" });
}

const PORT = process.env.PORT;
const OPENAI_SECRET_KEY = process.env.OPENAISECRETKEY;

module.exports ={
    PORT, OPENAI_SECRET_KEY
}