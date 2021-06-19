const seeder = require("mongoose-seed");
const db = require("./config/keys").mongoURI;

seeder.connect(db, function () {
  seeder.loadModels(["models/User.js", "models/View.js", "models/Comment.js"]);

  seeder.clearModels(["user"], function() {
    seeder.disconnect()
  })
  // , function () {
  //   seeder.populateModels(userData, function () {
  //     seeder.disconnect();
  //   });
  // });

  seeder.clearModels(["view"], function() {
    seeder.disconnect()
  })
  // , function () {
  //   seeder.populateModels(viewData, function () {
  //     seeder.disconnect();
  //   });
  // });

  seeder.clearModels(["comment"], function() {
    seeder.disconnect()
  })
  // , function () {
  //   seeder.populateModels(commentData, function () {
  //     seeder.disconnect();
  //   });
  // });
});

// seeder.connect(db, function () {
//   seeder.loadModels(["models/User.js", "models/View.js", "models/Comment.js"]);

//   seeder.clearModels(["user"], function () {
//     seeder.populateModels(userData, function () {
//       seeder.disconnect();
//     });
//   });

//   seeder.clearModels(["view"], function () {
//     seeder.populateModels(viewData, function () {
//       seeder.disconnect();
//     });
//   });

//   seeder.clearModels(["comment"], function () {
//     seeder.populateModels(commentData, function () {
//       seeder.disconnect();
//     });
//   });
// });

// const userData = [
//   {
//     model: "user",
//     documents: [
//       {
//         name: "demo",
//         email: "demo@demo.com",
//         password:
//           "$2a$10$JSwpSv3.03GcRVg.I8luWO9xEcrbn5/NUgm1Bg0qeNLCx8lIXwvuy",
//       },
//       {
//         name: "demo one",
//         email: "a@user.com",
//         password:
//           "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
//       },
//       {
//         name: "demo two",
//         email: "b@user.com",
//         password:
//           "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
//       },
//       {
//         name: "demo ",
//         email: "c@user.com",
//         password:
//           "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
//       },
//       {
//         name: "Prince",
//         email: "d@user.com",
//         password:
//           "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
//       },
//       {
//         name: "Carly Simon",
//         email: "e@user.com",
//         password:
//           "$2a$10$ZUjwjnBIlOfhDVN/PqYzh.3d/7OLjzo.5/2CGFM//4zHDQhh/OcPW",
//       },
//     ],
//   },
// ];

// const viewData = [
//   {
//     model: "view",
//     documents: [
//       //1
//       {
//         _id: "60c9209d5af3a21b96a2a068",
//         photos: [],
//         comments: [],
//         latitude: 37.8041386457992,
//         longitude: -122.46503785348509,
//         locationName: "the drunken oyster",
//       },
//       //2
//       {
//         _id: "60c9209d5af3a21b96a2a078",
//         photos: [],
//         comments: [],
//         latitude: 37.810616699474515,
//         longitude: 122.47692231355698,
//         locationName: "sunnyside",
//       },
//       //3
//       {
//         _id: "60c9209d5af3a21b96a2a088",
//         photos: [],
//         comments: [],
//         latitude: 40.71535,
//         longitude: -73.95827,
//         locationName: "willow glen",
//       },
//       //4
//       {
//         _id: "60c9209d5af3a21b96a2a098",
//         photos: [],
//         comments: [],
//         latitude: 37.810616699474515,
//         longitude: -122.47692231355698,
//         locationName: "china beach",
//       },
//       //5
//       {
//         _id: "60c9209d5af3a21b96a2a168",
//         photos: [],
//         comments: [],
//         latitude: 37.810616699474515,
//         latitude: -122.47692231355698,
//         locationName: "kjdf",
//       },
//       //6
//       {
//         _id: "60c9209d5af3a21b96a2a268",
//         photos: [],
//         comments: [],
//         latitude: 37.79629962576967,
//         latitude: 122.47795891725578,
//         locationName: "kjdf",
//       },
//       //7
//       {
//         _id: "60c9209d5af3a21b96a2a368",
//         photos: [],
//         comments: [],
//         latitude: 37.79629962576967,
//         latitude: -122.47795891725578,
//         locationName: "kjdf",
//       },
      // //8
      // {
      //   _id: "60c9209d5af3a21b96a2a468",
      //   photos: [],
      //   comments: [],
      //   latitude: 37.79629962576967,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //9
      // {
      //   _id: "60c9209d5af3a21b96a2a568",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //10
      // {
      //   _id: "60c9209d5af3a21b96a2a668",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //11
      // {
      //   _id: "60c9209d5af3a21b96a2a768",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //12
      // {
      //   _id: "60c9209d5af3a21b96a2a868",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //13
      // {
      //   _id: "60c9209d5af3a21b96a2a968",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //14
      // {
      //   _id: "60c9209d5af3a21b96a2a178",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //15

      // {
      //   _id: "60c9209d5af3a21b96a2a278",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //16
      // {
      //   _id: "60c9209d5af3a21b96a2a288",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //17
      // {
      //   _id: "60c9209d5af3a21b96a2a298",
      //   photos: [],
      //   comments: [],
      //   latitude: 40.71535,
      //   latitude: -73.95827,
      //   locationName: "kjdf",
      // },
      // //18
      // {
      //   _id: "60c9209d5af3a21b96a2a308",
      //   photos: [],
      //   comments: [],
      //   latitude: 37.7792829923467,
      //   latitude: -122.3894637661022,
      //   locationName: "kjdf",
      // },
      // //19
      // {
      //   _id: "60c9209d5af3a21b96a2a318",
      //   photos: [],
      //   comments: [],
      //   latitude: 37.76826023975391,
      //   latitude: -122.46920127394549,
      //   locationName: "kjdf",
      // },
      // //20
      // {
      //   _id: "60c9209d5af3a21b96a2a328",
      //   photos: [],
      //   comments: [],
      //   latitude: 37.7792829923467,
      //   latitude: -122.3894637661022,
      //   locationName: "kjdf",
      // },
//     ],
//   },
// ];

// const commentData = [
//   {
//     model: "comment",
//     documents: [
//       {
//         user: "60632aeb42e8d0a9a732a82f",
//         text: "What a view",
//         date: 2021 - 06 - 01,
//       },
//       {
//         user: "60632aeb42e8d0a9a732a82f",
//         text: "What a view",
//         date: 2021 - 06 - 01,
//       },
//       {
//         user: "60632aeb42e8d0a9a732a82f",
//         text: "What a view",
//         date: 2021 - 06 - 01,
//       },
//       {
//         user: "60632aeb42e8d0a9a732a82f",
//         text: "What a view",
//         date: 2021 - 06 - 01,
//       },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
      // {
      //   user: "60632aeb42e8d0a9a732a82f",
      //   text: "What a view",
      //   date: 2021 - 06 - 01,
      // },
//     ],
//   },
// ];
