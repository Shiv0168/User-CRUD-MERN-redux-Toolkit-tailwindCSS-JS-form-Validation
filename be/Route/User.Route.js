const express = require("express");
const {
  createUser,
  getAllUser,
  deleteUser,
  getById,
  editUser,
} = require("../Controllers/User.Controllers");

const router = express.Router();
router.route("/").post(createUser).get(getAllUser);
router.route("/:id").get(getById).put(editUser).delete(deleteUser);

module.exports = router;
