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
    await GroupComment.create({
      comment,
      groupId: group.id,
      userId: loggedInUser.id,
    });
    const newGroup = await Group.findByPk(req.params.id, {
      include: [
        { model: User, as: "member" },
        { model: GroupComment, include: [User] },
      ],
    });
    return res
      .status(201)
      .send({ message: "Comment successfully added", newGroup });
  } catch (e) {
    console.log(e);
  }
});

router.delete("/user/:id/remove", auth, async (req, res) => {
  const userToRemove = req.params.id;
  const { groupId } = req.body;
  const findGroup = await Group.findByPk(groupId);

  if (findGroup.dataValues.userId === req.user.id) {
    try {
      await GroupMember.destroy({
        where: {
          groupId: groupId,
          userId: userToRemove,
        },
      });
      const updatedGroup = await Group.findByPk(groupId, {
        include: [
          { model: User, as: "member" },
          { model: GroupComment, include: [User] },
        ],
      });
      return res.status(201).send({ message: "User removed", updatedGroup });
    } catch (e) {
      console.log(e);
    }
  } else
    return res
      .status(403)
      .send({ message: "You are not authorized to perform this action!" });
});

module.exports = router;
