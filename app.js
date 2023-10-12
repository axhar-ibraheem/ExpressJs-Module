const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRouter = require("./routes/shop");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/admin", adminRoutes);
app.use('/shop', shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found </h1>");
});
app.listen(PORT, () => {
  console.log(`server is listning on port ${PORT}...`);
});
