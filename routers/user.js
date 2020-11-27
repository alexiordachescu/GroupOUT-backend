const { Router } = require("express");
const auth = require("../auth/middleware");

const User = require("../models").user;

const router = new Router();

router.patch("/:id", auth, async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (req.user.id !== user.id) {
    return res.status(403).send({
      message: "You don't have the permission to perform this action",
      message,
    });
  }
  if (user === null) {
    return res
      .status(404)
      .send({ message: "This user doesn't exist in our database", message });
  }
  const { firstName, lastName, description, email } = req.body;
  await user.update({ firstName, lastName, description, email });
  return res.status(200).send({ user });
});

module.exports = router;
