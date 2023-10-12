const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log("This is the first middle ware");
  next();
});
app.use((req, res, next) => {
  console.log("this is the second middleware")
  next();
})

app.listen(PORT, () => {
  console.log(`server is listning on port ${PORT}...`);
});
