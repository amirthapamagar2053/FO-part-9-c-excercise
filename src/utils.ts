import { PatientFormValues, Gender } from "./types";

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing comment");
  }

  return name;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Incorrect or missing comment");
  }

  return occupation;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || !isString(dateOfBirth)) {
    throw new Error("Incorrect or missing comment");
  }
  return dateOfBirth;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((g) => g.toString())
    .includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorrect or missing ssn");
  }
  return ssn;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const checkNewPatientForm = (
  object: PatientFormValues | undefined
): PatientFormValues => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "occupation" in object &&
    "gender" in object &&
    "dateOfBirth" in object &&
    "ssn" in object
  ) {
    const newPatientEntry: PatientFormValues = {
      name: parseName(object.name),
      occupation: parseOccupation(object.occupation),
      gender: parseGender(object.gender),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
    };
    return newPatientEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};

export default checkNewPatientForm;
