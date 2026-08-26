const express = requrie("express");
const app = express();
const indexRouter = require("./routes/index");

app.set("view engine", ejs);
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));