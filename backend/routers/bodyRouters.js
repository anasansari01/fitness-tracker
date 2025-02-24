import express from 'express';
import { User } from '../models/userSchmena.js';
import { checkSession } from '../middleware/checkSession.js';

const router = express.Router();

//To create a New User:
router.post("/create", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    const newUser = await User.create({ name });
    req.session.userId = newUser._id;

    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session error" });
      }

      return res.status(201).json({
        message: "User created successfully",
        newUser
      });
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

//checking session validity
router.get("/check-session", (req, res) => {
  console.log("Session Data:", req.session);

  if (!req.session.userId) {
    return res.status(401).json({ message: "No active session" });
  }

  return res.status(200).json({ message: "Session active", userId: req.session.userId });
});


//To get all the data from the Database:
router.get('/users', async (req, res) => {
  try {

    const body = await User.find({});

    return res.status(200).json({
      count: User.length,
      data: body,
    })

  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
})

//To get by id from the Database:
router.get('/users/:id', async (req, res) => {
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

    const { userId } = req.session;
    const { age, gender, height, weight } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, {
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

    const { userId } = req.session;
    const { goal, activityLevel } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, {
      goal, activityLevel
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

    const { userId } = req.session;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    };

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
})

//Store calculated results (BMI, BMR, TDEE, Calories)
router.put('/results', checkSession, async (req, res) => {
  try {
    const { userId } = req.session;
    const { bmi, bmr, tdee, calories } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
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
    const { userId } = req.session;
    const result = await User.findByIdAndDelete(userId);

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
router.delete('/users/:id', async (req, res) => {
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