// Models
const CoFounder = require('../models/CoFounder');
const coFounderController = {};

coFounderController.addCoFounder = async (req, res, next) => {
  // Read data from request body
  const image = req.files.image;
  const description = req.body.description;
  const newImg = image.data;
  const encImg = newImg.toString('base64');

  var img = {
    contentType: image.mimetype,
    size: image.size,
    img: Buffer.from(encImg, 'base64'),
  };

  const coFounderInfo = {
    image: img,
    description,
  };
  const coFounder = await new CoFounder(coFounderInfo);

  await coFounder.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(coFounder);
    }
  });
};

coFounderController.getCoFounder = async (req, res, next) => {
  try {
    const coFounder = await CoFounder.find({});
    res.send(coFounder);
  } catch (err) {
    res.send(err);
  }
};
coFounderController.updateCoFounder = async (req, res, next) => {
  try {
    const image = req.files.image;
    const description = req.body.description;
    const newImg = image.data;
    const encImg = newImg.toString('base64');

    var img = {
      contentType: image.mimetype,
      size: image.size,
      img: Buffer.from(encImg, 'base64'),
    };

    const coFounder = await CoFounder.findOneAndUpdate(
      { _id: id },
      { $set: { image: img, description } }
    );
    res.send(coFounder);
  } catch (err) {
    res.send(err);
  }
};

// coFounderController.deleteService = async (req, res, next) => {
//   // Read Data from request body
//   const id = req.params.id;
//   try {
//       _id: id,
//     });
//     res.status(200).json({
//       message: 'Service was removed successfully!',
//     });
//   } catch (err) {
//     res.send(err);
//   }
// };
module.exports = coFounderController;
