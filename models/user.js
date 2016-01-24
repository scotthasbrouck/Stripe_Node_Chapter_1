var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) { return next(); }
  this.password = bcrypt.hashSync(req.body.password, 10);
});

userSchema.methods.authenticate = function(suppliedPassword, next) {
  bcrypt.compare(suppliedPassword, this.password, function(err, isMatch) {
    if (err) { return next(err); }
    next(null, isMatch);
  })
};

userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
