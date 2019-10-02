const bcrypt = require("bcryptjs");

module.exports = {
  async register(req, res) {
    const db = req.app.get("db");
    const { user_name, email, gender, password } = req.body;
    // console.log(req.body);

    const user = await db.find_email(email);
    console.log("email");
    if (user[0])
      return res.status(200).send({ message: "Email already in use" });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // console.log(hash);
    const newUser = await db.create_user([user_name, email, gender, hash]);
    delete newUser[0].hash;

    req.session.user = newUser;
    console.log(req.session.user);

    res
      .status(201)
      .send({ message: "Logged in", user: req.session.user, loggedIn: true });
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
      return res
        .status(200)
        .send({ message: "Logged in", user: req.session.user, loggedIn: true });
    }
    console.log(req.session);
  },

  logout(req, res) {
    req.session.destroy();
    res
      .status(200)
      .send({ message: "Logged Out", loggedin: false, user: null });
  },
  
};
