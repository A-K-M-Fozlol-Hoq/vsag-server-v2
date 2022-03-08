// Models
const Service = require('../models/Service');
const serviceController = {};

serviceController.addService = async (req, res, next) => {
  // Read data from request body
  const image = req.files.image;
  const name = req.body.name;
  const description = req.body.description;
  const newImg = image.data;
  const encImg = newImg.toString('base64');

  var img = {
    contentType: image.mimetype,
    size: image.size,
    img: Buffer.from(encImg, 'base64'),
  };

  const serviceInfo = {
    image: img,
    name,
    description,
  };
  const service = await new Service(serviceInfo);

  await service.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(service);
    }
  });
};

serviceController.getServices = async (req, res, next) => {
  try {
    const services = await Service.find({});
    res.send(services);
  } catch (err) {
    res.send(err);
  }
};

serviceController.deleteService = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const service = await Service.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'Service was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};
module.exports = serviceController;
