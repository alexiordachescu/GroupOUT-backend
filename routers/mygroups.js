const { groupCollapsed } = require("console");
const { Router } = require("express");
const { Op } = require("sequelize");
const auth = require("../auth/middleware");
const Group = require("../models").group;
const User = require("../models").user;
const Tag = require("../models").tag;
const GroupMember = require("../models").groupMember;

const router = new Router();

router.get("/admin", auth, async (req, res) => {
  try {
    const loggedInUser = req.user.id;
    const response = await Group.findAll({
      where: { userId: loggedInUser },
      include: [{ model: User, as: "member" }, { model: Tag }],
    });
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
});

router.get("/member", auth, async (req, res) => {
  try {
    const loggedInUser = req.user.id;
    const response = await GroupMember.findAll({
      where: { userId: loggedInUser },
    });
    const list = response.map((gb) => gb.groupId);
    const showGroups = await Group.findAll({
      where: {
        id: list,
        userId: { [Op.ne]: loggedInUser },
      },
      include: [{ model: User, as: "member" }, { model: Tag }],
    });

    res.status(200).json(showGroups);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
