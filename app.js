const express = require("express");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactUsRouter = require("./routes/contact-us");
const successRouter = require("./routes/success")
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use("/shop", shopRouter);
app.use("/", contactUsRouter);
app.use("/", successRouter)
app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});
app.listen(PORT, () => {
  console.log(`server is listning on port ${PORT}...`);
});
