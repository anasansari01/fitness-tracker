import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../models/userSchmena.js";
import { compare } from "../utils/helper.js";

// Serialize user
passport.serializeUser((user, done) => {
  console.log(`✅ inside Serializer: User ID ${user.id}`);
  console.log(user);
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  console.log(`✅ inside Deserializer & id: ${id}`);
  try {
    const findUser = await User.findById(id);
    if (!findUser) return done(null, false, { message: "User not found" });

    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

// Local Strategy for authentication
passport.use(
  new Strategy(async (username, password, next) => {
    try {
      const findUser = await User.findOne({ username });
      if (!findUser) return next(null, false, { message: "User not found" });

      const isMatch = await compare(password, findUser.password);
      if (!isMatch) return next(null, false, { message: "Invalid Credentials" });

      console.log("✅ inside Strategy");
      return next(null, findUser);
    } catch (err) {
      return next(err);
    }
  })
);

export default passport;