const { Router } = require("express");
const auth = require("../auth/middleware");
const Group = require("../models").group;
const User = require("../models").user;
const Tag = require("../models").tag;
const GroupMember = require("../models").groupMember;
const GroupComment = require("../models").groupComment;
const GroupTag = require("../models").groupTag;

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

router.post("/createGroup", auth, async (req, res) => {
  const { imageUrl, date, tags, description, groupSize } = req.body;

  if (!tags || !description) {
    return res.status(400).send({
      message:
        "A group must have at least one tag, a description and a maximum size",
    });
  }
  try {
    const newGroup = await Group.create({
      imageUrl: imageUrl,
      description: description,
      maxUsers: groupSize,
      date: date,
      userId: req.user.id,
    });

    await GroupMember.create({
      userId: req.user.id,
      groupId: newGroup.dataValues.id,
    });

    await GroupTag.create({ groupId: newGroup.dataValues.id, tagId: tags });
    return res.status(200).send({ message: "Group successfully created!" });
  } catch (e) {
    console.log(e);
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

    await GroupMember.create({
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

router.get("/group/:id", auth, async (req, res) => {
  try {
    const details = await Group.findByPk(req.params.id, {
      include: [
        { model: User, as: "member" },
        { model: GroupComment, include: [User] },
      ],
    });
    res.status(201).send(details);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
