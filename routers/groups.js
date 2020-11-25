const { Router } = require("express");
const auth = require("../auth/middleware");
const Group = require("../models").group;
const User = require("../models").user;
const Tag = require("../models").tag;
const GroupMember = require("../models").groupMember;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const response = await Group.findAll({
      include: [{ model: User, as: "member" }, { model: Tag }],
    });
    res.json(response);
  } catch (e) {
    next(e);
  }
});

router.post("/:id/join", auth, async (req, res) => {
  try {
    const group = await Group.findByPk(req.params.id);
    const members = await GroupMember.findAll({
      where: { groupId: req.params.id },
    });

    if (group === null) {
      return res.status(404).send({ message: "This Group doesn't exist!" });
    }
    if (group.maxUsers <= members.length) {
      return res.status(403).send({ message: "Group is full, sorry!" });
    }

    const loggedInUser = req.user;

    const join = await GroupMember.create({
      userId: loggedInUser.id,
      groupId: group.id,
    });
    const joined = await Group.findByPk(req.params.id, {
      include: [{ model: User, as: "member" }, { model: Tag }],
    });
    return res
      .status(201)
      .send({ message: "Successfully joined this group!", joined });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
