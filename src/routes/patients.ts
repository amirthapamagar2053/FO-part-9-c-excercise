import express from "express";
import patientsList from "../services/patients";

const router = express.Router();

router.get("/", (_req, res) => {
  return res.send(patientsList.getAllPatientExcludingSsn());
});

export default router;
