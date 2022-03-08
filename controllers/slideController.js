// Models
const Slide = require('../models/Slide');
const slideController = {};

slideController.addSlide = async (req, res, next) => {
  // Read data from request body
  const image = req.files.image;
  const title = req.body.title;
  const description = req.body.description;
  const newImg = image.data;
  const encImg = newImg.toString('base64');

  var img = {
    contentType: image.mimetype,
    size: image.size,
    img: Buffer.from(encImg, 'base64'),
  };

  const slideInfo = {
    image: img,
    title,
    description,
  };
  const slide = await new Slide(slideInfo);

  await slide.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(slide);
    }
  });
};

slideController.getSlides = async (req, res, next) => {
  try {
    const slides = await Slide.find({});
    res.send(slides);
  } catch (err) {
    res.send(err);
  }
};

slideController.deleteSlide = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const slide = await Slide.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'Slide was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = slideController;
