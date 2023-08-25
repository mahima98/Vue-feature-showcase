<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Examples of
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div class="mx-auto mt-16">
        <div class="w-full">
          <ul
            role="list"
            class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          >
            <li
              v-for="project in projects"
              :key="project.name"
              class="col-span-1 flex rounded-md shadow-sm"
            >
              <div
                :class="[
                  project.bgColor,
                  'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
                ]"
              >
                {{ project.initials }}
              </div>
              <div
                class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white"
              >
                <div class="flex-1 truncate px-4 py-6 text-sm">
                  <a
                    :href="project.href"
                    class="font-medium text-gray-900 hover:text-gray-600"
                    >{{ project.name }}</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

const projects = [
  {
    name: "Create/add/View patient",
    initials: "CR",
    href: "/patients",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Vee validate form",
    initials: "Vee",
    href: "/useform",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Stepper",
    initials: "Steps",
    href: "/stepper",
    members: 12,
    bgColor: "bg-purple-600",
  },

  {
    name: "vue toast",
    initials: "VT",
    href: "/toast",
    members: 8,
    bgColor: "bg-green-500",
  },
];
</script>
