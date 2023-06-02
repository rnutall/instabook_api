const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');

// Schema to create a thoughts model
const thoughtsSchema = new Schema(
  {
    thoughtsText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        getters: timeStamp,
    },
    userName: {
      type: "string",
      required: true,
    },
    reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'reactions',
        },
      ], 
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thoughts = model('thoughts', thoughtsSchema);

module.exports = thoughts;
