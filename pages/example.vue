<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAppStore } from "../store/appStore";

const { patientList, getPatientList } = useAppStore();

const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
});

// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit((values) => {
  //   alert(JSON.stringify(values, null, 2));

  patientList.push(values);

  console.log(values);
});

const email = defineInputBinds("email");
const password = defineInputBinds("password");
</script>

<template>
  <form @submit="onSubmit">
    {{ patientList }}
    email: <input type="email" v-bind="email" />
    <div>{{ errors.email }}</div>

    password<input type="password" v-bind="password" />
    <div>{{ errors.password }}</div>

    <button>Submit</button>
  </form>
</template>
