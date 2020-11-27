const { Router } = require("express");
const auth = require("../auth/middleware");
const Group = require("../models").group;
const User = require("../models").user;
const Tag = require("../models").tag;
const GroupMember = require("../models").groupMember;
const GroupComment = require("../models").groupComment;

const router = new Router();
router.get("/", async (req, res, next) => {
  try {
    const response = await Tag.findAll();
    res.json(response);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
