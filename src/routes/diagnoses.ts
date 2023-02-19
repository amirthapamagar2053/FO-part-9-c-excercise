import express from "express";
import diagnosesService from "../services/diagnosesService";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("the diagnioses reoute");
  return res.send(diagnosesService.getAllDiagnosis());
});

export default router;
