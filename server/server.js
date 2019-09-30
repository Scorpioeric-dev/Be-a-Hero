require("dotenv/config");
const express = require("express");
const app = express();
const massive = require("massive");
const { port, connection_string, session_secret } = process.env;
const session = require('express-session')
// const authCtrl = ('./authController')
// const transCtrl = ('./transController')
//middleware
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: session_secret,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 10
    }
  })
);

massive(connection_string).then(db => {
  app.set("db", db);
  app.listen(port, () => {
    console.log(`${port} mariachis in town`);
  });
});
