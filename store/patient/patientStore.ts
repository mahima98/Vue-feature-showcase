import { defineStore } from "pinia";

export type ProductType = {
  id: number;
  name: string;
  format: [
    {
      formatName: string | any[];
      price: number;
      prescription: string;
    }
  ];
};

export const usePatientStore = defineStore("PatientStore", {
  state: () => ({
    PatientList: [],
  }),

  getters: {},
  actions: {
    // getPatientList: (state) => {
    //   const patientDetails = $fetch("@/server/api/patients.ts");
    //   console.log(patientDetails);
    // },

    // Get list of all patients from server api patients.ts and store it in PatientList
    async getPatientList() {
      await fetch("http://localhost:3000/patientData", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((patient) => {
          this.PatientList = patient;
          console.log(patient);
        })
        .catch((error) => {
          throw error;
        });
    },

    async createPatient(requestOptions) {
      await fetch("http://localhost:3000/patientData", requestOptions)
        .then((res) => res.json())
        .then((patient) => {
          // this.PatientList = patient;
          console.log("patient", patient);
        })
        .catch((error) => {
          console.log("error", error);
          throw error;
        });
    },
  },
  persist: true,
});
