import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  goal: { type: String, default: null },
  activityLevel: { type: String, enum: ['nonVeryActive', 'lightlyActive', 'active', 'veryActive'], default: null },
  country: { type: String, default: null },
  age: { type: Number, default: null },
  gender: { type: String, enum: ['male', 'female', 'other'], default: null },
  height: { type: Number, default: null },
  weight: { type: Number, default: null },
  goalWeight: { type: Number, default: null },
  bmi: { type: Number, default: null },
  bmr: { type: Number, default: null },
  tdee: { type: Number, default: null },
  calories: { type: Number, default: null },
});

export const User = mongoose.model('User', userSchema);