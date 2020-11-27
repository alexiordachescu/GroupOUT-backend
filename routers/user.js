const { Router } = require("express");
const auth = require("../auth/middleware");
const Group = require("../models").group;
const User = require("../models").user;
const Tag = require("../models").tag;
const GroupMember = require("../models").groupMember;
const GroupComment = require("../models").groupComment;

const router = new Router();

router.patch("/:id", auth, async (req, res) => {
  const user = await User.findByPk(req.params.id);
  console.log(user);
});

module.exports = router;
