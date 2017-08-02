const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  id: {
    type: String
  },

  displayName: {
    type: String
  },

  email: {
    type: String
  },

  // playlists: [{
  //     type: Schema.Types.ObjectId,
  //     ref: "Playlist"
  // }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
