import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: { type: String, unique: true, sparse: true },
  goal: {
    type: String,
    enum: ['loseWeight', 'maintainWeight', 'gainWeight', 'gainMuscle', 'modifyDiet', 'stepCount'],
  },
  activityLevel: {
    type: String,
    enum: ['nonVeryActive', 'lightlyActive', 'active', 'veryActive'],
  },
  country: { type: String },
  age: { type: Number, min: 0 },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  height: { type: Number, min: 0 },
  weight: { type: Number, min: 0 },
  goalWeight: { type: Number, min: 0 },
  bmi: { type: Number, min: 0 },
  bmr: { type: Number, min: 0 },
  tdee: { type: Number, min: 0 },
  calories: { type: Number, min: 0 },
});

export const User = mongoose.model('User', userSchema);