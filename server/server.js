require("dotenv/config");
const express = require("express");
const app = express();
const massive = require("massive");
const { port, connection_string, session_secret } = process.env;
const session = require('express-session')
const authCtrl = require('./authController')
const transCtrl = require('./transController')

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
//endpoints
//auth
app.post('/auth/register',authCtrl.register)
app.post('/auth/login',authCtrl.login)
app.delete('/auth/logout',authCtrl.logout) 
//post
app.post('/api/donor',transCtrl.postDonor)
app.post('/api/donee',transCtrl.postDonee)
app.get('/api/donorData',transCtrl.getDonorData)
app.get('/api/doneeData',transCtrl.getDoneeData)
app.put('/api/editDonee/:id',transCtrl.editDonee)



massive(connection_string).then(db => {
  app.set("db", db);
  app.listen(port, () => {
    console.log(`${port} mariachis in town`);
  });
});
