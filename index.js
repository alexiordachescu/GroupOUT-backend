const express = require("express");
const app = express();
const groupRouter = require("./routers/groups");
const authRouter = require("./routers/auth");
const myGroupsRouter = require("./routers/mygroups");
const PORT = 4000;
const cors = require("cors");

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", authRouter);
app.use("/browse", groupRouter);
app.use("/mygroups", myGroupsRouter);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
