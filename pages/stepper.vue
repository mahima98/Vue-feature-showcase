<script setup>
const stepper = ref([
  { title: "Step 1", icon: "mdi-account" },
  { title: "Step 2", icon: "mdi-account" },
  { title: "Step 3", icon: "mdi-account" },
]);

const activeStep = ref(0);

const nextStep = () => {
  activeStep.value += 1;
};

const prevStep = () => {
  activeStep.value -= 1;
};

const getActiveStep = computed(() => stepper.value[activeStep.value]);
</script>

<template>
  <div class="w-full">
    <div class="flex justify-center gap-4 items-center py-4">
      <button
        class="btn"
        :class="`${activeStep === 0 ? '' : 'disabled bg-red-100'}`"
        :disabled="activeStep > 0"
      >
        Step 1
      </button>

      <!-- create step 2 button and add condition to disable step 1 and step 3 but keep step 2 active -->
      <button
        class="btn"
        :class="`${activeStep === 1 ? '' : 'disabled bg-red-100'}`"
        :disabled="activeStep > 1 || activeStep < 1"
      >
        Step 2
      </button>

      <!-- create step 3 button and add condition to disable step 1 and step 2 but keep step 3 active -->
      <button
        class="btn"
        :class="`${activeStep === 2 ? '' : 'disabled bg-red-100'}`"
        :disabled="activeStep > 2 || activeStep < 2"
      >
        Step 3
      </button>
    </div>

    <!-- create 3 forms and change steppers according to forma -->
    <div class="flex justify-center gap-4 items-center py-4">
      <transition name="slide-vertical" v-if="activeStep === 0">
        <div>
          <div class="flex justify-center items-center w-96 h-96 bg-blue-200">
            Step 1
          </div>
          <button @click="nextStep" class="btn">Next</button>
        </div>
      </transition>
      <transition name="slide-vertical" v-if="activeStep === 1">
        <div>
          <div class="flex justify-center items-center w-96 h-96 bg-red-200">
            Step 2
          </div>
          <button @click="prevStep" class="btn mr-2">Prev</button>
          <button @click="nextStep" class="btn">Next</button>
        </div>
      </transition>
      <transition name="slide-vertical" v-if="activeStep === 2">
        <div>
          <div class="flex justify-center items-center w-96 h-96 bg-yellow-200">
            Step 3
          </div>
          <button @click="prevStep" class="btn mr-2">Prev</button>
          <button @click="nextStep" class="btn">Next</button>
        </div>
      </transition>
    </div>
  </div>
</template>
<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: scale(0.8);
  transform-origin: left center;
  opacity: 0;
}

:root {
  --slide-vertical-direction: 1;
}

.slide-vertical-enter-active {
  transition: all 0.2s ease-out;
}

.slide-vertical-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-vertical-enter-from {
  transform: translateY(0);
  opacity: 0;
}

.slide-vertical-leave-to {
  transform: translateY(calc(var(--slide-vertical-direction) * -100px));
  opacity: 0;
}
</style>
