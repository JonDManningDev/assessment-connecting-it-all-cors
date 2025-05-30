const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router
  .route("/:userId")
  .get(cors(), controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
