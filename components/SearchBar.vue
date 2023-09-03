<template>
  <div class="flex flex-col justify-centergap-2 mx-4">
    <label for="search">search</label>
    <input
      v-model="searchTerm"
      @input="search"
      placeholder="Search for a product"
      class="mb-10 block w-64 placeholder:ml-4 p-2 md:p-4 pl-10 md:pl-[35px] text-sm text-gray-900 border border-gray-300 dark:bg-white dark:border-gray-200 dark:shadow-sm rounded-lg bg-gray-50 focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:placeholder-gray-400 dark:focus:ring-purple-500 dark:focus:border-purple-500"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup(props, { emit }) {
    const searchTerm = ref("");

    const search = () => {
      // Call a search function when the input changes
      emit("search", searchTerm.value);
    };

    watch(searchTerm, search);

    return {
      searchTerm,
    };
  },
};
</script>
