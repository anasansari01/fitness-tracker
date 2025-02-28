import express from 'express'
import router from "./routers/bodyRouters.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import { mongoDBuRL } from './config.js';

export function createApp() {
  const app = express();
  app.use(express.json());


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

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to the BodyInfo :)");
  })

  app.use("/fitness-home", router);

  return app;
}