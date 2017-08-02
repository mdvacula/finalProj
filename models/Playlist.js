const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlaylistSchema = new Schema ({
  name: {
    type: String
  }
  loc: [{
    lng: {
      type: Number
    },
    lat: {
      type: Number
    }
  }],


});
