<script setup lang="ts">
const open = ref(false);
</script>
<template>
  <div
    class="flex flex-col justify-center items-center container mx-auto w-full h-screen"
  >
    <h2 class="card-title py-4">Vue Teleport modal</h2>
    <div class="card w-96">
      <div class="card-body ring-1 ring-gray-200 rounded-xl shadow-xl">
        <button class="btn btn-primary" @click="open = true">open modal</button>
        <Teleport to="body">
          <Transition name="modal">
            <div v-if="open" class="modal-mask">
              <div class="modal-container">
                <p>Hello from the modal!</p>
                <button @click="open = false" class="btn btn-sm btn-primary">
                  Close
                </button>
              </div>
            </div>
          </Transition>
        </Teleport>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 500px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>
