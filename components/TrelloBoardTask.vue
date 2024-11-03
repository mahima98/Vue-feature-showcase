<script setup lang="ts">
import type { Task } from '~/types';

defineProps<{
    task: Task
}>()
</script>

<template>
    <div class="task flex bg-white p-2 rounded min-w-[250px] shadow-sm mb-2">
        <DragHandle class="pr-2" />
        <span>{{ task.title }}</span>
    </div>
</template>