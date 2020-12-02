const express = require("express");
const cors = require("cors");
const app = express();
const groupRouter = require("./routers/groups");
const authRouter = require("./routers/auth");
const myGroupsRouter = require("./routers/mygroups");
const groupDetailsRouter = require("./routers/groupdetails");
const userRouter = require("./routers/user");
const tagRouter = require("./routers/tags");
const { PORT } = require("./config/constants");

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", authRouter);
app.use("/browse", groupRouter);
app.use("/mygroups", myGroupsRouter);
app.use("/groups", groupDetailsRouter);
app.use("/user", userRouter);
app.use("/tags", tagRouter);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
