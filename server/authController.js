const bcrypt = require("bcryptjs");
const stripe = require('stripe')(process.env.stripe_secret)
module.exports = {
  async register(req, res) {
    const db = req.app.get("db");
    const { user_name, email, gender, password,blood_type } = req.body;
    console.log(req.body);

    const user = await db.find_email(email);
    console.log(req.body);
    if (user[0])
      return res.status(200).send({ message: "Email already in use" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // console.log(hash);
    const newUser = await db.create_user([user_name, email, gender, hash,blood_type]);
    delete newUser[0].hash;

    req.session.user = newUser[0];
    
    res
    .status(201)
    .send({ message: "Success", user: req.session.user, loggedIn: true });
    
    console.log(req.session.user);
  },
  async login(req, res) {
    const db = req.app.get("db");
    const { email, password, id } = req.body;
    // console.log(req.body);
    const user = await db.find_email([email]);
    if (!user[0]) return res.status(200).send({ message: "Email not found" });
    const result = bcrypt.compareSync(password, user[0].hash);
    // console.log(result);
    if (result) {
      delete user[0].hash;
      req.session.user = user[0];
      console.log(req.session);
      return res
        .status(200)
        .send({ message: "logged in", user: req.session.user, loggedIn: true });
    }
  },

  logout(req, res) {
    req.session.destroy();
    
    res
      .status(200)
      .send({ message: "Logged Out", loggedin: false, user: null });
  },
  getSession(req,res){
    if(req.session){
      res.status(200).send(req.session)
    }
  },
  pay:(req,res) => {
    const {token:{id},amount} = req.body
    stripe.charges.create(
      {
        amount:amount,
        currency:'usd',
        source:id,
        description:'test Charge'
      },
      (err,charge) => {
        if(err){
          console.log(err)
          return res.status(500).send(err)
        } else {
          // console.log('Successful Donation',charge)
          //Do something with that purchase or donation
          return res.status(200).send({message:'You are amazing!!',charge})

        }
      }
    )
  },

  
  
};
