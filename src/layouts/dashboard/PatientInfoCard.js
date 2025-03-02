import React from "react";
import Avatar from "@mui/icons-material/SettingsAccessibility";

type Patient = {
  name: string,
  age: number,
  gender: string,
  bloodType: string,
  allergies: string,
};

const PatientInfoCard: React.FC = () => {
  const patient: Patient = {
    name: "John Doe",
    age: 45,
    gender: "Male",
    bloodType: "A+",
    allergies: "Penicillin",
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-blue-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <Avatar name={patient.name} size="64" round={true} />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-medium text-gray-900">Patient Information</h2>
          <div className="mt-4 text-gray-600">
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Blood Type: {patient.bloodType}</p>
            <p>Allergies: {patient.allergies}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfoCard;
