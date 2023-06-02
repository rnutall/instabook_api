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
      default: 'Unnamed reactions',
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      getters: true,
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
