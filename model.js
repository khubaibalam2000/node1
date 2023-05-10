'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AssetSchema = new Schema({
  type: {
    type: String,
    required: 'Kindly enter the name of the asset'
  },
  location: {
    type: String,
    required: 'Kindly enter the location of the asset'
  },
  threat: {
    type: String,
    required: 'Kindly enter the threat of the asset'
  },
  level: {
    type: Number,
    required: 'Kindly enter the level of the asset'
  },
  currentdefense: {
    type: String,
    required: 'Kindly enter the currentdefense of the asset'
  },
  proposeddefense: {
    type: String,
    required: 'Kindly enter the proposeddefense of the asset'
  },
  createdat: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Assets', AssetSchema);