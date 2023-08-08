<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import { usePatientStore } from "@/store/patient/patientStore";

//from store
const { PatientList, fetchTodos } = usePatientStore();

// data
const isLoading = ref(false);
const isLoadingTitle = ref("loading");

const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    // password: yup.string().min(6).required(),
  }),
});

// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSavePatient = handleSubmit((values) => {
  isLoadingTitle.value = "Saving";

  // PatientList.push(values);
  isLoading.value = false;
  console.log(values);
});

const firstName = defineInputBinds("firstName");
const lastName = defineInputBinds("lastName");
const email = defineInputBinds("email");
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="space-y-10 divide-y divide-gray-900/10">
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Create patient
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Add patient personal Information.
          </p>
        </div>

        <div v-if="isLoading" class="btn">
          <Loading :title="isLoadingTitle" />
        </div>
        <form
          @submit.prevent="onSavePatient"
          v-else
          class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
        >
          <div class="px-4 py-6 sm:p-8">
            <div
              class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
            >
              <div class="sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >First name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    v-bind="firstName"
                    autocomplete="given-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Last name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    v-bind="lastName"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    v-bind="email"
                    autocomplete="email"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span class="text-red-400 text-xs">{{ errors.email }}</span>
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="country"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Country</label
                >
                <div class="mt-2">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="street-address"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Street address</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2 sm:col-start-1">
                <label
                  for="city"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >City</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="region"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >State / Province</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="postal-code"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >ZIP / Postal code</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
          >
            <button
              type="button"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

function usePatientStore() { throw new Error("Function not implemented."); }
