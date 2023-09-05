<!-- SearchPage.vue -->
<template>
  <div>
    <SearchBar @search="performSearch" />
    <ProductTable :searchResults="searchStore.searchResults" />
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from "~/store/search"; // Import your Pinia store
import { searchProducts } from "~/services/api"; // Import your API service

const searchStore = useSearchStore();

const performSearch = async (query: string) => {
  try {
    const results = await searchProducts(query);
    searchStore.setSearchResults(results);
  } catch (error) {
    console.error("Error performing search:", error);
  }
};
</script>
