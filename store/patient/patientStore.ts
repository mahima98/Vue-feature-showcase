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
    async fetchTodos() {
      const { data }: any = await useFetch("/api/patients");
      if (data.value) {
        this.$state.PatientList = data.value;
      }
    },
  },
  persist: true,
});
