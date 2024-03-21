import express, { Router } from "express";
import serverless from "serverless-http";

// init epxress
const api = express();

// setting up router
const router = Router();
router.get("/", (req, res) => {
    res.send("Hello World from /")
})

api.use("/api/", router);

export const handler = serverless(api);