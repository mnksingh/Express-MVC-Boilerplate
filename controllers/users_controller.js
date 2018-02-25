const User = require("../models/user");

module.exports = {
  createUser(req, res, next) {
    const userProps = req.body;
    const newUser = new User(userProps);
    newUser
      .save()
      .then(user => {
        res.send(user);
      })
      .catch(next);
  }
};
