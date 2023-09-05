<script setup lang="ts">
import { watchDebounced } from "@vueuse/core";
import { PropType } from "nuxt/dist/app/compat/capi";
import { saveProduct } from "../services/api";

const props = defineProps({
  searchResults: {
    type: Array as PropType<ISearchResult[] | null>,
    required: true,
    default: () => null,
  },
});

interface ISearchResult {
  id: string;
  p_name: string;
  l_rep: string;
  mah: string;
  count: string;
  unit: string;
  expiry_date: string;
  buying_price: string;
  selling_price: string;
  imp: string;
}

type TIndex = string;

interface IRow {
  dirty: boolean;
}

interface IHistory {
  [key: string]: IRow;
}

const history = ref<IHistory>({});

function addToHistory(index: TIndex) {
  history.value[index] = { dirty: true };
}

function updateItemInHistory(index: TIndex, dirty: boolean = false) {
  if (Object.keys(history.value).includes(index.toString())) {
    history.value[index] = { dirty };
  }
}

function saveRow(index: TIndex) {
  if (!props.searchResults) return;
  const id = index.toString();

  const editedProduct = props.searchResults.filter((product) => {
    return product.id === id;
  })[0];

  setTimeout(() => {
    saveProduct(editedProduct)
      .then((data) => {
        console.log(data);
        updateItemInHistory(data.id);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }, 1000);
}

const existIsHistory = (index: string | number) =>
  Object.keys(history.value).includes(index.toString());

const isDirty = (index: string | number) => {
  if (existIsHistory(index)) {
    return history.value[index].dirty;
  }
  return false;
};

const saveQueue = computed(() => {
  return Object.keys(history.value).filter((index) => {
    return !!history.value[index].dirty;
  });
});

// Automatically save changes when editedRows array changes
watchDebounced(
  saveQueue,
  () => {
    saveQueue.value.forEach((index: TIndex) => {
      console.log("Saving row:", index);
      saveRow(index);
    });
  },
  { debounce: 500, maxWait: 1000 }
);
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Product Name</th>
        <th>Manufacturer</th>
        <th>Count</th>
        <!-- Add more table headers if needed -->
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="product in searchResults"
        :key="product.id"
        :class="{
          edited: existIsHistory(product.id),
          dirty: isDirty(product.id),
        }"
      >
        <td>{{ product.id }} {{ existIsHistory(product.id) }}</td>
        <td>
          <input
            type="text"
            v-model="product.p_name"
            @input="addToHistory(product.id)"
          />
        </td>
        <td>
          <input
            type="text"
            v-model="product.mah"
            @input="addToHistory(product.id)"
          />
        </td>
        <td>
          <input
            type="text"
            v-model="product.count"
            @input="addToHistory(product.id)"
          />
        </td>
        <!-- Add more editable fields as needed -->
        <!-- <td>
          <button @click="saveRow(index)">Save</button>
        </td> -->
      </tr>
    </tbody>
  </table>
</template>
<style>
.edited {
  background-color: lightgreen; /* Add your desired styling for edited rows */
}

.dirty {
  background-color: lightgoldenrodyellow; /* Add your desired styling for dirty rows */
}

tr {
  transition: all 0.3s ease-in-out;
}
</style>
