console.log("Start Server ...");

// Create an object
const express = require("express");
const bodyParser = require("body-parser");

const authRouter = require("./routes/admin/auth");
const productsAdminRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");

const cookieSession = require("cookie-session");

const app = express();

// middleware
app.use(express.static("public"));

// bodyParser helps us translate from code to data in GET POST .. methods
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cookieSession({
    // name: "session",
    // this key is used to encrypte the cookies keys.
    keys: ["11223344"],
  })
);

/* ------------------------------- add router ------------------------------- */

app.use(authRouter);
app.use(productsAdminRouter);
app.use(productsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
  console.log("I Listening...");
});
