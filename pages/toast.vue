<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAppStore } from "../store/appStore";
import { useToast } from "primevue/usetoast";

useHead({
  title: "Home",
});

const text = ref();
const toast = useToast();
const isLoadingTitle = ref("");
const greet = () => {
  toast.add({ severity: "info", summary: "Hello " + text.value });
};

const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
});

// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2));

  const data = JSON.stringify(values, null, 2);

  console.log("data", data);

  const appStore = useAppStore();

  appStore.patientList.push(values);

  console.log("useAppStore", appStore.patientList);
  isLoadingTitle.value = "success...";
  ``;
  toast.add({ severity: "success", summary: isLoadingTitle.value });
});

const email = defineInputBinds("email");
const password = defineInputBinds("password");
</script>

<template>
  <div>
    <div
      class="flex flex-col justify-center items-center container mx-auto w-full h-screen"
    >
      <h2 class="card-title py-4">Toast + Vee-validate Form (useform)</h2>
      <form @submit="onSubmit" class="card w-96">
        <div class="card-body ring-1 ring-gray-200 rounded-xl shadow-xl">
          <label class="label">Email</label>
          <input
            type="email"
            v-bind="email"
            class="input input-bordered w-full max-w-xs"
          />
          <div>{{ errors.email }}</div>

          <label class="label">Password</label
          ><input
            type="password"
            v-bind="password"
            class="input input-bordered w-full max-w-xs"
          />
          <div>{{ errors.password }}</div>

          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>

    <div class="container">
      <div class="flex flex-column align-items-center mt-1">
        <img alt="Vue logo" src="./assets/primevue-logo.png" />
        <Toast />

        <div class="mt-4">
          <form @submit.prevent="greet">
            <InputText type="text" v-model="text" />
            <Button type="submit" label="Submit" />
          </form>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="flex flex-column align-items-center mt-1">
        <img alt="Vue logo" src="./assets/primevue-logo.png" />
        <Toast />

        <div class="mt-4">
          <form @submit.prevent="greet">
            <InputText type="text" v-model="text" />
            <Button type="submit" label="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
