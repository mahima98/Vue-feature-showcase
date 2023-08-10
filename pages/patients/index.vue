<script setup>
import { usePatientStore } from "@/store/patient/patientStore";
import { useForm } from "vee-validate";
import * as yup from "yup";

const patientStore = usePatientStore();
const { PatientList, getPatientList } = usePatientStore();
// getPatientList();

const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    // email: yup.string().email().required(),
    // password: yup.string().min(6).required(),
  }),
});

// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit((values) => {
  patientStore.createPatient(values);
  PatientList.push(values);
  console.log(values);
});

const id = defineInputBinds("id");
const name = defineInputBinds("name");
const email = defineInputBinds("email");
</script>

<template>
  <div class="max-w-7xl mx-auto py-12 px-4">
    <div class="text-xl font-bold">Create/add Patient</div>
    <form @submit="onSubmit" class="py-2 flex gap-4">
      <div>
        ID: <input type="number" v-bind="id" /> Name:
        <input type="text" v-bind="name" /> email:
        <input type="email" v-bind="email" />
        <div>{{ errors.email }}</div>
      </div>

      <button class="btn">Submit</button>
    </form>
    <div>
      <h1 class="text-xl font-bold">View Patient List</h1>
      <ul class="text-black pt-2">
        <li v-for="(patient, index) in PatientList" :key="index">
          {{ index }}
          name: {{ patient.email }} password: {{ patient.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
