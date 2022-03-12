// ContactUs
const ContactUs = require('../models/ContactUs');
const contactUsController = {};

contactUsController.addForm = async (req, res, next) => {
  // Read data from request body
  const name = req.body.name;
  const email = req.body.email;
  const details = req.body.details;
  const contactUsInfo = {
    name,
    email,
    details,
  };
  const contactUs = await new ContactUs(contactUsInfo);

  await contactUs.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(contactUs);
    }
  });
};

contactUsController.getAll = async (req, res, next) => {
  try {
    const contactUs = await ContactUs.find({});
    res.send(contactUs);
  } catch (err) {
    res.send(err);
  }
};

contactUsController.deleteForm = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const contactUs = await ContactUs.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'form was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = contactUsController;
