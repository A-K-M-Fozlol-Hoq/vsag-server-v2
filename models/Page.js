const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;
const pageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    article: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: Object,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
