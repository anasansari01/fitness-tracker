import express from 'express';
import { User } from '../models/userSchmena.js';
import { checkSession } from '../middleware/checkSession.js';
import { hashPassword, compare } from '../utils/helper.js';

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields (username, password) are required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User with this username already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
      },
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (req.session.user) {
    return res.status(400).json({ message: "Already logged in" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Bad Credentials: Check password" });
    }

    req.session.user = { userId: user._id, username: user.username };

    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session error" });
      }

      res.cookie("sessionId", req.sessionID, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      });

      return res.status(200).json({
        message: "Login successful",
        user: { userId: user._id, username: user.username },
      });
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
});

//To Enter the name of user:
router.put("/name", async (req, res) => {
  try {
    const { userId } = req.session.user;
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const user = await User.findByIdAndUpdate(userId, { name });

    return res.status(201).json(user);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

//checking session validity
router.get("/login/check-session", (req, res) => {
  console.log("Session Data:", req.session);

  if (!req.session.user) {
    return res.status(401).json({ message: "No active session" });
  }

  return res.status(200).json({ message: "Session active", user: req.session.user });
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

    const { userId } = req.session.user;
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

    const { userId } = req.session.user;
    const { goal, goalWeight, activityLevel } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, {
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

    const { userId } = req.session.user;
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
    const { userId } = req.session.user;
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
router.delete('/user', async (req, res) => {
  try {
    const { userId } = req.session.user;
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
router.delete('/user/:id', async (req, res) => {
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