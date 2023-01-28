import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import router from "./routes/RegisterApi.js";
import cors from "cors";
import connect from "./database/mongodb.js";
import router2 from "./routes/HomeApi.js";

const app = express();
const PORT = process.env.PORT;
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api", router);
app.use("/", router2);

connect();

app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
