import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => ({
    patientList: [],
  }),
  getters: {
    getPatientList: (state) => state.patientList,
  },
  actions: {},
  persist: true,
});
