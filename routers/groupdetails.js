const { Router } = require("express");
const auth = require("../auth/middleware");
const Group = require("../models").group;
const User = require("../models").user;
const Tag = require("../models").tag;
const GroupMember = require("../models").groupMember;
const GroupComment = require("../models").groupComment;

const router = new Router();

router.post("/:id/comment", auth, async (req, res) => {
  try {
    const group = await Group.findByPk(req.params.id);
    const loggedInUser = req.user;
    if (!group) {
      return res.status(404).send({ message: "This group cannot be found!" });
    }
    const { comment } = req.body;
    const addComment = await GroupComment.create({
      comment,
      groupId: group.id,
      userId: loggedInUser.id,
    });
    return res
      .status(201)
      .send({ message: "Comment successfully added", addComment });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
