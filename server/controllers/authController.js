const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

const registerUser = async (res, req) => {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    //validation for firstname
    if (!firstname) {
      return res.json({
        error: "firstname is required",
      });
    }
    //validation for lastname
    if (!lastname) {
      return res.json({
        error: "lastname is required",
      });
    }
    //validation for username
    if (!username) {
      return res.json({
        error: "username is required",
      });
    }
    //validation for password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and it should atleast 6 characters long",
      });
    }
    //check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken Already",
      });
    }

    const hashedPassword = await hashPassword(password);
    //create user in database
    const user = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUser,
};
