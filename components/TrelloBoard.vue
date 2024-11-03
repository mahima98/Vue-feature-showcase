<script setup lang="ts">
import type { Column, Task } from '~/types';
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

const alt = useKeyModifier('Alt')
</script>
<template>
    <div>
        <draggable v-model="columns" group="columns" item-key="id" :animation="150" handle=".drag-handle"
            class="flex gap-4 overflow-x-auto items-start">
            <template #item="{ element: column }: { element: Column }">
                <div class="bg-gray-200 p-5 rounded min-w-[250px]">
                    <header class="flex gap-2 font-bold mb-2">
                        <DragHandle />
                        {{ column.title }}
                    </header>

                    <draggable v-model="column.tasks" :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
                        item-key="id" handle=".drag-handle" :animation="150">
                        <template #item="{ element: task }: { element: Task }">
                            <div>
                                <TrelloBoardTask :task="task" />
                            </div>
                        </template>

                    </draggable>
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
<style>
.sortable-chosen {
    /* background-color: green; */
}

.sortable-drag .task {
    transform: rotate(5deg);
}

.sortable-ghost .task {
    position: relative;
}

.sortable-ghost .task::after {
    content: "";
    @apply absolute top-0 right-0 left-0 bottom-0 bg-slate-300 rounded;
}
</style>