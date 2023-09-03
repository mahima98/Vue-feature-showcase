// store/search.js
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    searchResults: [], // Store the search results
  }),
  actions: {
    setSearchResults(results) {
      this.searchResults = results;
    },
  },
});
