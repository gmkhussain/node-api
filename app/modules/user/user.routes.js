module.exports = app => {
  const users = require("./user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", users.create);

  // Retrieve all user
  router.get("/", users.findAll);

  // Retrieve all published user
  router.get("/published", users.findAllPublished);

  // Retrieve a single user with id
  router.get("/:id", users.findOne);

  // Update a user with id
  router.put("/:id", users.update);

  // Delete a user with id
  router.delete("/:id", users.delete);

  // Delete all users
  router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};
