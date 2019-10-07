require("dotenv/config");
const express = require("express");
const app = express();
const massive = require("massive");
const { port, connection_string, session_secret } = process.env;
const session = require('express-session')
const authCtrl = require('./authController')
const transCtrl = require('./transController')
const socket = require('socket.io')


const server = app.listen(port, () => {
  console.log(`${port} mariachis in town`);
});
const io = socket(server)

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
app.put('/api/editDonee/:donee_id',transCtrl.editDonee)
app.put('/api/editDonor/:donor_id',transCtrl.editDonor)



massive(connection_string).then(db => {
  app.set("db", db);
});

io.on('connection',socket =>{
  
  socket.on('join chat', data => {
    socket.join(data.room)

  })
  socket.on('emit to room socket',data => {
    socket.emit('room response',data)
  })
  socket.on('blast to room socket',data => {
    io.to(data.room).emit('room response',data)
  })
  socket.on('disconnect',() => {

  })

})

