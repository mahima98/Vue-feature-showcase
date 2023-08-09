<script setup>
import { usePatientStore } from "@/store/patient/patientStore";

const patientStore = usePatientStore();
const { PatientList, getPatientList } = usePatientStore();

// patientStore.getAllPatients();
getPatientList();

console.log("patientList");

// const { data } = await useFetch("/api/patients");
// const patientList = data.value.data;

// console.log(data.value);
</script>

<template>
  <div class="max-w-7xl mx-auto py-12">
    <!-- <NuxtLink to="/patients/create" class="btn btn-accent mb-4"
      >Add patient</NuxtLink
    >
    <div class="ring-2 ring-gray-200 rounded-md px-4 pb-4">
      <ul role="list" class="divide-y divide-gray-100">
        <li
          v-for="person in patientList"
          :key="person.email"
          class="flex items-center justify-between gap-x-6 py-5"
        >
          <div class="flex min-w-0 gap-x-4">
            <img
              class="h-12 w-12 flex-none rounded-full bg-gray-50"
              :src="person.imageUrl"
              alt=""
            />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                {{ person.name }}
              </p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                {{ person.email }}
              </p>
            </div>
          </div>
          <div class="flex gap-2">
            <NuxtLink
              :to="`/patients/${person.id}`"
              class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >Edit</NuxtLink
            >
            <NuxtLink
              :to="`/patients/${person.id}`"
              class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >View</NuxtLink
            >
          </div>
        </li>
      </ul>
      <a
        href="#"
        class="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >View all</a
      >
    </div> -->
  </div>
</template>
