import mongoose from "mongoose";
import { PORT, mongoDBuRL } from './config.js'
import { createApp } from "./createApp.js";

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

const app = createApp();