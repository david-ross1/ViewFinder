const db = require("./config/keys").mongoURI;
module.exports = {
  modelBaseDirectory: "models",
  models: "*.js",
  data: "data",
  db: `${db}`,
};
