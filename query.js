const User = require("./models").user;
const Group = require("./models").group;

const getGroup = async () => {
  try {
    const group = await Group.findByPk(1, {
      include: [
        { model: User, as: "owner" },
        { model: User, as: "member" },
      ],
    });
    console.log(group);
  } catch (e) {
    console.log(e);
  }
};

getGroup();
