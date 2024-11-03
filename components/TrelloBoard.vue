<script setup lang="ts">
import type { Column } from '~/types';
import { nanoid } from "nanoid"

const columns = ref<Column[]>([
    {
        id: nanoid(),
        title: "Backlog",
        tasks: [
            {
                id: nanoid(),
                title: "Create marketing landing page",
                createdAt: new Date()
            },
            {
                id: nanoid(),
                title: "task 2",
                createdAt: new Date()
            },
            {
                id: nanoid(),
                title: "task 3",
                createdAt: new Date()
            }
        ]
    },
    {
        id: nanoid(),
        title: "Selected for Devs",
        tasks: [
            {
                id: nanoid(),
                title: "Task 1 Column 2",
                createdAt: new Date()
            }
        ]
    },
    {
        id: nanoid(),
        title: "in progress",
        tasks: [
            {
                id: nanoid(),
                title: "Task 1 Column 3",
                createdAt: new Date()
            }
        ]
    },
    {
        id: nanoid(),
        title: "QA",
        tasks: [
            {
                id: nanoid(),
                title: "Task 1 Column 4",
                createdAt: new Date()
            }
        ]
    }
]);

</script>
<template>
    <div class="flex gap-4 overflow-x-auto items-start">
        <div v-for="column in columns" :key="column.id" class="bg-gray-200 p-5 rounded min-w-[250px]">
            <header>
                {{ column.title }}
            </header>
            <p v-for="task in column.tasks" :key="task.id">
                {{ task.title }}
            </p>
        </div>
    </div>
</template>