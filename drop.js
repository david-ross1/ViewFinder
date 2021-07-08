const seeder = require("mongoose-seed");
const db = require("./config/keys").mongoURI;

seeder.connect(db, function () {
  seeder.loadModels(["models/User.js", "models/View.js", "models/Comment.js"]);

  seeder.clearModels(["user"], function () {
    seeder.disconnect();
  });

  seeder.clearModels(["view"], function () {
    seeder.disconnect();
  });

  seeder.clearModels(["comment"], function () {
    seeder.disconnect();
  });
});
