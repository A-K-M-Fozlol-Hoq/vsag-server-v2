// Models
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminController = {};

adminController.addAdmin = async (req, res, next) => {
  // Read data from request body
  const email = req.body.email;
  // const password = req.body.password;
  const password = await bcrypt.hash(req.body.password, 10);
  const adminInfo = {
    email,
    password,
  };
  const admin = await new Admin(adminInfo);

  await admin.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(admin);
    }
  });
};

adminController.getAll = async (req, res, next) => {
  try {
    const admin = await Admin.find({});
    res.send(admin);
  } catch (err) {
    res.send(err);
  }
};
adminController.isAdmin = async (req, res, next) => {
  try {
    const user = await Admin.findOne({ email: req.body.email });
    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        // prepare the user object to generate token
        const userObject = {
          email: user.email,
          password: user.password,
        };

        // generate token
        const token = jwt.sign(userObject, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });
        res.send({ userObject, token });
      } else {
        res.send('Invalid email or password, please try again');
      }
    } else {
      res.send('Invalid email or password, please try again');
    }
    // const admin = await Admin.find({});
    // res.send(admin);
  } catch (err) {
    res.send(err);
  }
};

adminController.isValid = async (req, res, next) => {
  try {
    const user = await Admin.findOne({ email: req.body.email });
    console.log(user, req.body.email, req.body.password);
    if (user && user._id) {
      // const isValidPassword = await bcrypt.compare(
      //   req.body.password,
      //   user.password
      // );
      // console.log(isValidPassword);
      if (req.body.password === user.password) {
        res.send(true);
      } else {
        res.send(false);
      }
    } else {
      res.send(false);
    }
    // const admin = await Admin.find({});
    // res.send(admin);
  } catch (err) {
    res.send(err);
  }
};

adminController.deleteAdmin = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const admin = await Admin.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'Admin was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = adminController;
