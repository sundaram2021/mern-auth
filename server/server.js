import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/RegisterApi.js";
import cors from "cors";
import connect from "./database/mongodb.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());



app.use("/api", router)

connect();

app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
