const seeder = require("mongoose-seed");
const db = require("./config/keys").mongoURI;

seeder.connect(db, function () {
  seeder.loadModels(["models/User.js", "models/View.js", "models/Comment.js"]);

  seeder.clearModels(["user"], function () {
    seeder.populateModels(userData, function () {
      seeder.disconnect();
    });
  });
});

const userData = [
  {
    model: "user",
    documents: [
      {
        name: "demo",
        email: "demo@demo.com",
        password:
          "$2a$10$JSwpSv3.03GcRVg.I8luWO9xEcrbn5/NUgm1Bg0qeNLCx8lIXwvuy",
      },
      {
        name: "demo one",
        email: "a@user.com",
        password:
          "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
      },
      {
        name: "demo two",
        email: "b@user.com",
        password:
          "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
      },
      {
        name: "demo ",
        email: "c@user.com",
        password:
          "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
      },
      {
        name: "Prince",
        email: "d@user.com",
        password:
          "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
      },
      {
        name: "Carly Simon",
        email: "e@user.com",
        password:
          "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
      },
    ],
  },
];

const viewData = [
  {
    model: "view",
    documents: [
      //1
      {
        _id: "60c9209d5af3a21b96a2a068",
        photos: [],
        comments: [],
        latitude: 37.8041386457992,
        longitude: -122.46503785348509,
        locationName: "the drunken oyster",
      },
      //2
      {
        _id: "60c9209d5af3a21b96a2a078",
        photos: [],
        comments: [],
        latitude: 37.810616699474515,
        longitude: 122.47692231355698,
        locationName: "sunnyside",
      },
      //3
      {
        _id: "60c9209d5af3a21b96a2a088",
        photos: [],
        comments: [],
        latitude: 40.71535,
        longitude: -73.95827,
        locationName: "willow glen",
      },
      //4
      {
        _id: "60c9209d5af3a21b96a2a098",
        photos: [],
        comments: [],
        latitude: 37.810616699474515,
        longitude: -122.47692231355698,
        locationName: "china beach",
      },
      //5
      {
        _id: "60c9209d5af3a21b96a2a168",
        photos: [],
        comments: [],
        latitude: 37.810616699474515,
        latitude: -122.47692231355698,
        locationName: "kjdf",
      },
      //6
      {
        _id: "60c9209d5af3a21b96a2a268",
        photos: [],
        comments: [],
        latitude: 37.79629962576967,
        latitude: 122.47795891725578,
        locationName: "kjdf",
      },
      //7
      {
        _id: "60c9209d5af3a21b96a2a368",
        photos: [],
        comments: [],
        latitude: 37.79629962576967,
        latitude: -122.47795891725578,
        locationName: "kjdf",
      },
    ],
  },
];
