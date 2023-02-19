import diagnoses from "../../data/diagnoses";
import { Diagnosis } from "../types";

const getAllDiagnosis = (): Diagnosis[] => {
  return diagnoses;
};

//need to review export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllDiagnosis,
};
