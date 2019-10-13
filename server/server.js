require("dotenv/config");
const express = require("express");
const app = express();
const massive = require("massive");
const { port, connection_string, session_secret,_twilio_account_sid,_twilio_auth_token,} = process.env;
const session = require('express-session')
const authCtrl = require('./authController')
const transCtrl = require('./transController')

const socket = require('socket.io')
const twilio = require('twilio')
//accountSid for twilio
const accountSid = _twilio_account_sid
//authToken for twilio
const authToken = _twilio_auth_token

//creating new client for twilio
const client = new twilio(accountSid,authToken)
//bringing in middleware cors
const cors = require('cors')


const server = app.listen(port, () => {
  console.log(`${port} mariachis in town`);
});
const io = socket(server)

//middleware
//opens doorway securely communicating with servers
app.use(cors())
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
//stripe endpoint
app.post('/api/payment',authCtrl.pay)
//twilio endpointapp.post('api/sendSMS',ctrl.sendSMS)
//auth
app.post('/auth/register',authCtrl.register)
app.post('/auth/login',authCtrl.login)
app.delete('/auth/logout',authCtrl.logout)
app.get('/auth/session',authCtrl.getSession)
//post
app.post('/api/donor',transCtrl.postDonor)
app.post('/api/donee',transCtrl.postDonee)
app.get('/api/donorData',transCtrl.getDonorData)
app.get('/api/doneeData',transCtrl.getDoneeData)
app.put('/api/editDonee/:donee_id',transCtrl.editDonee)
app.put('/api/editDonor/:donor_id',transCtrl.editDonor)

//sending twilio text
app.get('/send-text',(req,res) => {
  // getting values ,passed via the query string
  const {recipient,textmessage} = req.query
  client.message.create({
    body:textmessage,
    to:"+1" + recipient,
    from:"+8016530129"//from twilio
  }).then((message) => console.log(message.body))})

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
  //this connects to room
  socket.on('blast to room socket',data => {
    //emit sends it back to room
    console.log(data)
    io.to(data.room).emit('room response',data)
  }) 
  socket.on('disconnect',() => {

  })

})

