const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;
const CoFounderSchema = mongoose.Schema(
  {
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

const CoFounder = mongoose.model('CoFounder', CoFounderSchema);

module.exports = CoFounder;
