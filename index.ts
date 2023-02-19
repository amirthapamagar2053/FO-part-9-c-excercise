// import express from "express";
import express = require("express");
import diagnosesRouter from "./src/routes/diagnoses";
// const express = require("express");
import cors = require("cors");
const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
