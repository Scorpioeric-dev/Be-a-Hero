

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
    const { donor_id, user_name, blood_type, title, profile_pic } = req.query;
    const donorData = await db.find_donor_username_bloodtype([
      donor_id,
      user_name,
      blood_type,
      title,
      profile_pic
    ]);
    res.status(200).send(donorData);
  },
  getDoneeData: async (req, res) => {
    const db = req.app.get("db");
    const { donee_id, user_name, blood_type, title, profile_pic } = req.query;
    let doneeData = await db.find_donee_username_bloodtype([
      donee_id,
      user_name,
      blood_type,
      title,
      profile_pic
    ]);
    res.status(200).send(doneeData);
  },

  editDonee: async (req, res) => {
    const { title, profile_pic, blood_type } = req.body;
    console.log(req.body)
    const { donee_id } = req.params;
    console.log(req.params)
    const db = req.app.get("db");
    const edit = await db.edit_donee([
      donee_id,
      title,
      profile_pic,
      blood_type
    ]);
    res.status(200).send(edit);
  },
  editDonor: async (req, res) => {
    const { title, profile_pic, blood_type } = req.body;
    const { donor_id } = req.params;
    const db = req.app.get("db");
    const edit = await db.edit_donor([
      donor_id,
      title,
      profile_pic,
      blood_type
    ]);
    res.status(200).send(edit);
  }
  
};
