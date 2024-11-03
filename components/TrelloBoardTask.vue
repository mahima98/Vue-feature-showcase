<script setup lang="ts">
import type { Task } from '~/types';

defineProps<{
    task: Task
}>()
</script>

<template>
    <div :title="task.createdAt.toLocaleDateString()" class="bg-white p-2 rounded min-w-[250px] shadow-sm mb-2">
        <span>{{ task.title }}</span>
    </div>
</template>