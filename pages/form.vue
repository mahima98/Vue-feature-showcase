<template>
  <div>
    <component :is="stepComponent" />
  </div>
</template>

<script setup>
import { useFormStore } from "@/store/formStore";

const stepComponent = computed(() => {
  const step = useFormStore().step;
  return `Step${step}`;
});
</script>
