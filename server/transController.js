module.exports = {
  postDonor: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const {
      title,
      profile_pic,
      blood_type,
      lung_id,
      kidney_id,
      liver_id,
      pancreas_id,
      hair_id
    } = req.body;

    const donor = await db.create_donor([
      title,
      profile_pic,
      blood_type,
      lung_id,
      kidney_id,
      liver_id,
      pancreas_id,
      hair_id,
      user_id
    ]);
    res.status(200).send(donor);
  },
  postDonee: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;

    const {
      title,
      profile_pic,
      blood_type,
      lung_id,
      kidney_id,
      liver_id,
      pancreas_id,
      hair_id
    } = req.body;
    //This allows me to bridge the session user and registered user
    const donee = await db.create_donee([
      title,
      profile_pic,
      blood_type,
      lung_id,
      kidney_id,
      liver_id,
      pancreas_id,
      hair_id,
      user_id
    ]);
    console.log(donee);
    res.status(200).send(donee);
  },
  getDonorData: async (req, res) => {
    const db = req.app.get("db");
    const { blood_type, title, profile_pic } = req.query;
    const donorData = await db.find_donor_username_bloodtype([
      blood_type,
      title,
      profile_pic
    ]);
    res.status(200).send(donorData);
  },
  getDoneeData: async (req, res) => {
    const db = req.app.get("db");
    const { blood_type, title, profile_pic } = req.query;
    let doneeData = await db.find_donee_username_bloodtype([
      blood_type,
      title,
      profile_pic
    ]);
    res.status(200).send(doneeData);
  },

  editDonee: async (req, res) => {
    const { title, profile_pic, blood_type } = req.body;
    const { id } = req.params;
    const db = req.app.get("db");
    const edit = await db.edit_donee([id, title, profile_pic, blood_type]);
    res.status(200).send(edit);
  }
};
