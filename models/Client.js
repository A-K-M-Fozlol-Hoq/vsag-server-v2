const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;

const clientSchema = mongoose.Schema(
  {
    image: {
      // data: Buffer,
      // contentType: Object,
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
// export default Client;
