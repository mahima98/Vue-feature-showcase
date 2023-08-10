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
    // async getPatientList() {
    //   await $fetch("http://localhost:3000/api/patients", {
    //     method: "GET",
    //   })
    //     .then((response: any) => {
    //       console.log("getPatientList - ", response.data);
    //       this.PatientList = response.data;
    //     })
    //     .catch((error) => {
    //       throw error;
    //     });
    // },

    async createPatient(values) {
      await $fetch("http://localhost:3000/api/patients", {
        method: "POST",
      })
        .then((response: any) => {
          console.log("getPatientList - ", response.data);
          this.PatientList = response.data;
          this.PatientList.push(values);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
  persist: true,
});
