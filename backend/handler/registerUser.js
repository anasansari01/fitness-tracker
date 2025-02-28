import { hashPassword } from "../utils/helper.js";
import { User } from "../models/userSchmena.js";
import { validationResult, matchedData } from 'express-validator'

export const createUserHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());
  const data = matchedData(req);
  data.password = hashPassword(data.password);
  const newUser = new User(data);
  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: savedUser._id,
        username: savedUser.username,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error" });
  }
};