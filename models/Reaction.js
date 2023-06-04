const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema(
  {
    reactionsId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionsBody: {
      type: String,
      required: true,
      maxlength: 280, 
    },
    userName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionsSchema;
