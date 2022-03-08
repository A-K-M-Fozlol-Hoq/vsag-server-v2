// Models
// const { Client } = require('../models/Client');
// import Client from '../models/Client.js';
const Client = require('../models/Client');
const clientController = {};

clientController.addClient = async (req, res, next) => {
  // Read data from request body
  const image = req.files.image;
  const newImg = image.data;
  const encImg = newImg.toString('base64');

  var img = {
    contentType: image.mimetype,
    size: image.size,
    img: Buffer.from(encImg, 'base64'),
  };

  const clientInfo = {
    image: img,
  };

  // Create an instance of the Model client
  const client = await new Client(clientInfo);

  await client.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(client);
    }
  });
};

clientController.getClients = async (req, res, next) => {
  try {
    const clients = await Client.find({});
    res.send(clients);
  } catch (err) {
    res.send(err);
  }
};

clientController.deleteClient = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const client = await Client.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'User was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = clientController;
