<template>
  <div>
    <input v-model="formData.ndc" placeholder="NDC" />
    <input v-model="formData.name" placeholder="Name" />
    <button @click="createEntry">Create</button>
  </div>
</template>

<script setup>
import { useFormStore } from "@/store/formStore";

const { formData } = useFormStoreore();
const createEntry = async () => {
  useFormStore().updateFormData(formData);

  try {
    // Make an API POST request to create the entry
    const response = await fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Move to the next step upon successful entry creation
      useFormStore().setStep(2);
    } else {
      console.error("Error creating entry:", response.statusText);
      // Handle error if necessary
    }
  } catch (error) {
    console.error("API error:", error);
    // Handle error if necessary
  }
};
</script>
