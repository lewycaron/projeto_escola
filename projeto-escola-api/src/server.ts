import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
app.listen(3333, '0.0.0.0', () => { console.log("Running on port 3333") });