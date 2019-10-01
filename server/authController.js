const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res) {
      
    const db = req.app.get("db");
    const { user_name, email, gender, password } = req.body;
    console.log(req.body)

    const user = await db.find_email(email);
    if (user[0])
      return res.status(200).send({ message: "Email already in use" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await db.create_user({ email, user_name, gender,hash})
    delete newUser[0].hash;

    req.session.user = newUser
    console.log(req.session.user)
    
    res.status(201).send({ message: "Logged in", user: req.session.user, loggedIn: true });
  },
  async login(req, res) {
    const db = req.app.get("db");
    const { email, password } = req.body;
    const user = await db.find_user(email);
    if (!user[0]) return res.status(200).send({ message: "Incorrect Email" });
    const result = bcrypt.compareSync(password, user[0].hash);
    if (!result) return res.status(200).send({ message: "Incorrect password" });
    const { user_name, gender, email } = user[0];
    req.session.user = { user_name, gender, email };
    res
      .status(200)
      .send({ message: "Logged in", user: req.session.user, loggedIn: true });
  }
};



