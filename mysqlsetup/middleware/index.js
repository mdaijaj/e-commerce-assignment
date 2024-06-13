const db = require("../model/index");
const User = db.userModel;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Email
  User.findOne({
    where: { email: req.body.email }
  }).then(user => {
    if (user) {
      return res.status(500).send({ message: "Failed! Email is already in use!" });
    }
    next();
  });
};

const verifySignUp = {
   checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;