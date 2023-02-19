import axios from "axios";
import patients from "../../data/patients";
import { Patient, PatientExcludingSsn, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const patientslists: Patient[] = patients as Patient[];

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

const getAllPatientExcludingSsn = (): PatientExcludingSsn[] => {
  return patientslists.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);

  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  create,
  getAllPatientExcludingSsn,
};
