import express from "express";
import patientsList from "../services/patients";
import { v1 as uuid } from "uuid";

const router = express.Router();

router.get("/", (_req, res) => {
  return res.send(patientsList.getAllPatientExcludingSsn());
});

router.post("/", (req, res) => {
  return res.send({ ...req.body, id: uuid() });
});

export default router;
