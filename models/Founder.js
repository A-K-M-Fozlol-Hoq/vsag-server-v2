const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;
const founderSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

const Founder = mongoose.model('Founder', founderSchema);

module.exports = Founder;
