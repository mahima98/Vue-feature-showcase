<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex gap-2">
    <span class="loading loading-dots loading-xs"></span>
    <div class="capitalize">{{ title }}</div>
  </div>
</template>
