const { Router } = require("express");
const Group = require("../models").group;
const User = require("../models").user;
const Tag = require("../models").tag;

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

module.exports = router;
