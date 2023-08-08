<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "../store/appStore";

const { patientList } = storeToRefs(useAppStore());

console.log("patientList", patientList.value);
</script>
<template>
  <div>
    <h1>Patient List</h1>
    <!-- {{ patientList }} -->
    <ul class="text-black">
      <li v-for="(patient, index) in patientList" :key="index">
        {{ index }}
        name: {{ patient.email }} password: {{ patient.password }}
      </li>
    </ul>

    <table class="table-auto">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(patient, index) in patientList" :key="index">
          <td>{{ patient.email }}</td>
          <td>{{ patient.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
