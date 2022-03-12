// Models
const Founder = require('../models/Founder');
const founderController = {};

founderController.addFounder = async (req, res, next) => {
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

  const founderInfo = {
    image: img,
    description,
  };
  const founder = await new Founder(founderInfo);

  await founder.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(founder);
    }
  });
};

founderController.getFounder = async (req, res, next) => {
  try {
    const founder = await Founder.find({});
    res.send(founder);
  } catch (err) {
    res.send(err);
  }
};
founderController.updateFounder = async (req, res, next) => {
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

    const founder = await Founder.findOneAndUpdate(
      { _id: id },
      { $set: { image: img, description } }
    );
    res.send(founder);
  } catch (err) {
    res.send(err);
  }
};

// founderController.deleteService = async (req, res, next) => {
//   // Read Data from request body
//   const id = req.params.id;
//   try {
//     const founder = await Founder.findByIdAndDelete({
//       _id: id,
//     });
//     res.status(200).json({
//       message: 'Service was removed successfully!',
//     });
//   } catch (err) {
//     res.send(err);
//   }
// };
module.exports = founderController;
