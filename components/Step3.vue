<template>
  <div>
    <select v-model="formData.tablet">
      <option value="tablet1">Tablet 1</option>
      <option value="tablet2">Tablet 2</option>
    </select>
    <button @click="prevStep">Previous</button>
    <button @click="saveForm">Save</button>
  </div>
</template>

<script setup>
import { useFormStore } from "@/store/formStore";

const { formData } = useFormStoreStore();
const prevStep = () => {
  useFormStore().updateFormData(formData);
  useFormStore().setStep(2);
};
const saveForm = async () => {
  try {
    // Make an API PUT request to update the entry with tablet information
    const response = await fetch(`http://localhost:3000/entries/${entryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tablet: formData.tablet }),
    });

    if (response.ok) {
      // Reset the form and step upon successful entry update
      useFormStore().resetForm();
    } else {
      console.error("Error updating entry:", response.statusText);
      // Handle error if necessary
    }
  } catch (error) {
    console.error("API error:", error);
    // Handle error if necessary
  }
};
</script>
