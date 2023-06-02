const { Schema, Types } = require('mongoose');

const usersSchema = new Schema(
  {
    usersId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    usersName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      default: 'Unnamed users',
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        valiArray: [valiArrayEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },  //() => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    
    thoughts: {
      type: Array,
      default: Array.now,
    },
    firends: {
        type: Array,
        default: Array.now,
      },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = usersSchema;
