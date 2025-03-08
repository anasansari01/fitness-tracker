import express from 'express';
import { User } from '../models/userSchmena.js';
import { checkSession } from '../middleware/checkSession.js';
import { createUserHandler } from '../handler/registerUser.js'
import { checkSchema, validationResult } from 'express-validator';
import { checkUsernameValidationSchema } from "../utils/checkUsernameValidationSchema.js"
import passport from 'passport';
import '../strategies/local-strategies.js'

const router = express.Router();

router.post("/register", checkSchema(checkUsernameValidationSchema), createUserHandler);

router.post("/login", passport.authenticate('local'), (req, res) => {
  return res.status(200).json({
    message: "Login successful",
    user: req.user,
  });
});

//To Enter the name of user:
router.put("/name", checkSession, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user } = req.session.passport;
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const userName = await User.findByIdAndUpdate(user, { name });

    return res.status(201).json(userName);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

//checking session validity
router.get('/login/check-session', checkSession, (req, res) => {
  return res.status(200).send({ message: "Session is Active" });
});


//To get all the data from the Database:
router.get('/user', async (req, res) => {
  try {

    const users = await User.find({});

    return res.status(200).json({
      count: users.length,
      data: users,
    })

  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
})

//To get by id from the Database:
router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = await User.findById(id);

    if (!body) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(body);

  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
})

// router to ADD: age, Gender, height, weigth:
router.put('/demographics', checkSession, async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user } = req.session.passport;
    const { age, gender, height, weight } = req.body;

    const updatedUser = await User.findByIdAndUpdate(user, {
      age, gender, height, weight
    }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json(updatedUser);

  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
})

//Router to put User goals & activity level
router.put('/goals', checkSession, async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user } = req.session.passport;
    const { goal, goalWeight, activityLevel } = req.body;

    const updatedUser = await User.findByIdAndUpdate(user, {
      goal, goalWeight, activityLevel
    }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json(updatedUser);

  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
})

//To get User Profile from the Database:
router.get('/profile', checkSession, async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user } = req.session.passport;
    const userProfile = await User.findById(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    };

    return res.status(200).json(userProfile);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
})

//Store calculated results (BMI, BMR, TDEE, Calories)
router.put('/results', checkSession, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user } = req.session.passport;
    const { bmi, bmr, tdee, calories } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      user,
      { bmi, bmr, tdee, calories },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// delete session / destroy session
router.delete('/delete', async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user } = req.session.passport;
    const result = await User.findByIdAndDelete(user);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    req.session.destroy();

    return res.status(200).json({ message: "User deleted successfully" });;
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
})

//To delete by id from the Database:
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });;
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
})


export default router;