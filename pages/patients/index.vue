<script setup>
import { usePatientStore } from "@/store/patient/patientStore";
import { storeToRefs } from "pinia";
import { useForm } from "vee-validate";
import * as yup from "yup";

const patientStore = usePatientStore();
const { PatientList } = storeToRefs(usePatientStore());
patientStore.getPatientList();

const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    // email: yup.string().email().required(),
    // password: yup.string().min(6).required(),
  }),
});

// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid

// add a watcher onSubmit to send data to server
const onSubmit = handleSubmit(async (values) => {
  const raw = JSON.stringify(values);

  console.log("raw", raw);

  let requestOptions = {
    method: "POST",
    body: raw,
    redirect: "manual",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // send data to server
  console.log("requestOptions.value", requestOptions);
  await patientStore.createPatient(requestOptions);

  await patientStore.getPatientList();
  // reset the form
  // resetForm();
});

// Watch for changes in PatientList data
watchEffect(() => {
  // This block will be triggered whenever PatientList changes
  console.log("PatientList has changed:", PatientList);
});

const id = defineInputBinds("id");
const name = defineInputBinds("name");
// const email = defineInputBinds("email");
</script>

<template>
  <div
    class="flex flex-col gap-4 justify-center items-center mx-auto py-12 px-4"
  >
    <div class="text-xl font-bold">Create/add Patient</div>
    <form
      @submit="onSubmit"
      class="card-body w-72 ring-1 ring-gray-200 rounded-xl shadow-xl"
    >
      <div>
        <label class="label"> ID:</label>
        <input
          type="number"
          v-bind="id"
          class="input input-bordered w-full max-w-xs"
        />

        <label class="label"> Name:</label>
        <input
          type="text"
          v-bind="name"
          class="input input-bordered w-full max-w-xs"
        />
      </div>

      <button class="btn">Submit</button>
    </form>
    <div>
      <h1 class="text-xl font-bold">View Patient List</h1>
      <ul class="text-black pt-2">
        <li v-for="(patient, index) in PatientList" :key="index">
          {{ index }}
          id: {{ patient.id }} name: {{ patient.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
