<script setup lang="ts">
import type { Column } from '~/types';
import draggable from "vuedraggable"
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
    <div>
        <draggable v-model="columns" group="columns" item-key="id" :animation="150"
            class="flex gap-4 overflow-x-auto items-start">
            <template #item="{ element: column }: { element: Column }">
                <div class="bg-gray-200 p-5 rounded min-w-[250px]">
                    <header>
                        {{ column.title }}
                    </header>
                    <TrelloBoardTask v-for="task in column.tasks" :task="task" :key="task.id" />
                    <footer class="text-gray-400">
                        <button>+ Add card</button>
                    </footer>
                </div>
            </template>
        </draggable>
    </div>
    <pre>
    {{ columns }}
</pre>
</template>