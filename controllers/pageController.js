// Models
const Page = require('../models/Page');
const pageController = {};

pageController.addPage = async (req, res, next) => {
  // Read data from request body
  const image = req.files.image;
  const title = req.body.title;
  const article = req.body.article;
  const slug = req.body.slug;
  const newImg = image.data;
  const encImg = newImg.toString('base64');

  var img = {
    contentType: image.mimetype,
    size: image.size,
    img: Buffer.from(encImg, 'base64'),
  };

  const pageInfo = {
    image: img,
    title,
    article,
    slug
  };
  const page = await new Page(pageInfo);

  await page.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(page);
    }
  });
};

pageController.getPage = async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const page = await Page.find({slug:slug});
    res.send(page);
  } catch (err) {
    res.send(err);
  }
};

pageController.getAll = async (req, res, next) => {
  try {
    const pages = await Page.find({});
    res.send(pages);
  } catch (err) {
    res.send(err);
  }
};

pageController.deletePage = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const page = await Page.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'Page was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = pageController;
