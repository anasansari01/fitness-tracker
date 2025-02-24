import express, { json } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBuRL } from './config.js'
import router from "./routers/bodyRouters.js";
import session from "express-session";
import MongoStore from 'connect-mongo'

const app = express();
app.use(express.json());

mongoose
  .connect(mongoDBuRL)
  .then(() => {
    console.log("App is connected to the Database");
    app.listen(PORT, () => {
      console.log(`App is connected to PORT: ${PORT}`);
    })
  })
  .catch((error) => {
    throw error;
  })

app.use(session({
  secret: 'Health',
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
  store: MongoStore.create({
    mongoUrl: mongoDBuRL,
    collectionName: "Session",
    ttl: 14 * 24 * 60 * 60,
  })
}));

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to the BodyInfo :)");
})

app.use("/fitness-home", router);