const User = require("./models").user;
const Group = require("./models").group;
const Tag = require("./models").tag;

const getGroup = async () => {
  try {
    const group = await Group.findByPk(2, {
      include: [
        { model: User, as: "owner" },
        { model: User, as: "member" },
        { model: Tag },
      ],
    });
    console.log(group);
  } catch (e) {
    console.log(e);
  }
};

getGroup();
