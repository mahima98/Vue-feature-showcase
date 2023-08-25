import { defineStore } from "pinia";

export const useFormStore = defineStore({
  id: "form",
  state: () => ({
    step: 1,
    formData: {
      ndc: "",
      name: "",
      usageDirection: "",
      tablet: "",
    },
  }),
  actions: {
    setStep(step) {
      this.step = step;
    },
    updateFormData(data) {
      this.formData = { ...this.formData, ...data };
    },
    resetForm() {
      this.step = 1;
      this.formData = {
        ndc: "",
        name: "",
        usageDirection: "",
        tablet: "",
      };
    },
  },
});
